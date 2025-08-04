from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
import time
import json

def obtener_mas_vendidos():
    print("[*] Iniciando scraper...")

    options = Options()
    options.headless = False  # Cambialo a True si querés que no se abra el navegador
    options.add_argument("--window-size=1920,1080")

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    driver_path = os.path.join(BASE_DIR, '..', 'driver', 'driver_chrome', 'chromedriver-linux64', 'chromedriver')
    print(f"[*] Usando Chromedriver en: {driver_path}")

    driver = webdriver.Chrome(service=Service(driver_path), options=options)

    try:
        url = "https://www.yenny-elateneo.com/ranking-mas-vendidos/"
        print(f"[*] Abriendo URL: {url}")
        driver.get(url)

        wait = WebDriverWait(driver, 20)
        print("[*] Esperando que se carguen las cards...")
        wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "div.js-item-product")))

        time.sleep(2)
        cards = driver.find_elements(By.CSS_SELECTOR, "div.js-item-product")
        print(f"[*] Se encontraron {len(cards)} productos")

        resultados = []
        for idx, card in enumerate(cards, 1):
            try:
                contenedor = WebDriverWait(card, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, "div.js-item-container"))
                )

                # Buscamos título, autor y precio solo si existen
                try:
                    titulo = contenedor.find_element(By.CSS_SELECTOR, "div.js-item-name").text.strip()
                except:
                    titulo = ""
                try:
                    autor = contenedor.find_element(By.CSS_SELECTOR, "p.text-accent").text.strip()
                except:
                    autor = ""
                try:
                    precio = contenedor.find_element(By.CSS_SELECTOR, "span.js-price-display.item-price").text.strip()
                except:
                    precio = ""
                try:
                    link = contenedor.find_element(By.CSS_SELECTOR, "a").get_attribute("href")
                except:
                    link = ""
                try:
                    img_tag = contenedor.find_element(By.CSS_SELECTOR, "div.js-image-container img")
                    imagen_url = img_tag.get_attribute("src") or img_tag.get_attribute("data-src")
                except:
                    imagen_url = ""

                if titulo and precio:  # Solo agregamos si hay título y precio
                    resultados.append({
                        "titulo": titulo,
                        "autor": autor,
                        "precio": precio,
                        "url": link,
                        "imagen": imagen_url
                    })
                    print(f"  [+] Libro {idx}: {titulo} - {autor} - {precio}")
                else:
                    print(f"  [~] Libro {idx} descartado por datos incompletos")

            except Exception as e:
                print(f"  [!] Error en producto {idx}: {e}")



        # Guardar JSON
        output_path = os.path.join(BASE_DIR, "libros_mas_vendidos.json")
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(resultados, f, ensure_ascii=False, indent=2)

        print(f"[*] JSON guardado en: {output_path}")
        time.sleep(5)
        return resultados

    except Exception as e:
        print(f"[!] Error general: {e}")
        return []

    finally:
        driver.quit()
        print("[*] Navegador cerrado")

if __name__ == "__main__":
    libros = obtener_mas_vendidos()
    print("\n=== Libros extraídos ===")
    for libro in libros:
        print(libro)

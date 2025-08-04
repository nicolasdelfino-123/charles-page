import React, { useEffect, useState } from 'react';

function MasVendidos() {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/mas-vendidos')
            .then(res => res.json())
            .then(data => {
                setLibros(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error al obtener libros:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-10 text-gray-500">Cargando libros...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Libros más vendidos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {libros.map((libro, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                        onClick={() => window.open(libro.url, "_blank")}
                    >
                        <img
                            src={libro.imagen}
                            alt={libro.titulo}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{libro.titulo}</h3>
                            {/* Podés agregar más datos aquí si los incluís en el scraper */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MasVendidos;

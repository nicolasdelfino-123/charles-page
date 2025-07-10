import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Slider = () => {
    return (
        <div className="container my-4">
            <div id="carousel" className="carousel slide mx-auto" style={{ maxWidth: '1000px' }}>
                <div
                    className="carousel-inner rounded"
                    style={{
                        height: '500px',
                        overflow: 'hidden',
                    }}
                >
                    <div className="carousel-item active">
                        <img
                            src="./banner-2.png"
                            className="d-block mx-auto"
                            alt="Banner 1"
                            style={{
                                height: '100%',
                                width: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./banner.webp"
                            className="d-block mx-auto"
                            alt="Banner 2"
                            style={{
                                height: '490px',
                                width: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./lyna.webp"
                            className="d-block mx-auto"
                            alt="Banner 2"
                            style={{
                                height: '490px',
                                width: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./banner-3.jpg"
                            className="d-block mx-auto"
                            alt="Banner 2"
                            style={{
                                height: '490px',
                                width: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>



                {/* Flecha izquierda */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{
                        filter: 'invert(1)', // Esto convierte la flecha blanca en negra
                    }}></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                {/* Flecha derecha */}
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{
                        filter: 'invert(1)', // Esto convierte la flecha blanca en negra
                    }}></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
    );
}

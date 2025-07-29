import React from 'react'

export const NavBar = () => {
    return (
        <div className="container-fluid d-flex align-items-center p-3 bg-dark border-bottom justify-content-center">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 d-flex justify-content-between gap-5 align-items-center text-white w-100" style={{ maxWidth: '1000px' }} >
                    <span>Libros</span>
                    <span>Catálogo</span>
                    <span>Los más vendidos</span>
                    <span>Infantiles</span>
                    <span>Novelas</span>
                    <span>Textos Escolares</span>
                </div>
            </div>
        </div>
    )
}



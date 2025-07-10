import React from 'react'

export const NavBar = () => {
    return (
        <div className="container-fluid d-flex align-items-center p-3 bg-dark border-bottom justify-content-center">
            <div className="d-flex justify-content-between align-items-center text-white w-100" style={{ maxWidth: '1000px' }} >
                <span>Libros</span>
                <span>Catálogo</span>
                <span>Los más vendidos</span>
                <span>Infantiles</span>
                <span>Novelas</span>
                <span>Textos Escolares</span>
            </div>
        </div>
    )
}



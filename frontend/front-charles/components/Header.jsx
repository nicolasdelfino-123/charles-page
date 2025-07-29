import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <header className="container-fluid bg-red border-bottom py-3">
            <div className="row align-items-center">

                {/* LOGO + TÍTULO */}
                <div className="col-12 col-md-3 d-flex align-items-center justify-content-center order-1 order-md-1 mb-2 mb-md-0">
                    <img src="/chaplin.png" alt="foto-chaplin" style={{ height: '60px' }} />
                    <h1 className="titulo m-0 ms-3 fw-bold">Charles</h1>
                </div>

                {/* ÍCONOS */}
                <div className="col-12 col-md-4 d-flex justify-content-center  align-items-center gap-3 order-2 order-md-3 mb-2 mb-md-0">
                    <a href="#" className="text-dark text-decoration-none fw-semibold d-flex align-items-center">
                        <FontAwesomeIcon icon={faRightToBracket} className="me-2 fs-5" />
                        <span className="d-none d-sm-inline">Acceder</span>
                    </a>
                    <a href="#" className="text-dark text-decoration-none fw-semibold d-flex align-items-center">
                        <FontAwesomeIcon icon={faHeart} className="pe-2" color="black" />
                        <span className="d-none d-sm-inline">Favoritos</span>
                    </a>
                    <a href="#" className="text-dark text-decoration-none fw-semibold d-flex align-items-center">
                        <FontAwesomeIcon icon={faCartShopping} className="pe-2" color="black" />
                        <span className="d-none d-sm-inline">$&nbsp;0,00</span>
                    </a>
                </div>

                {/* BÚSQUEDA */}
                <div className="col-12 col-md-5 order-3 order-md-2">
                    <input
                        type="text"
                        placeholder="Ingresar título, autor, ISBN..."
                        className="form-control search-bar"
                    />
                </div>

            </div>
        </header>
    );
}
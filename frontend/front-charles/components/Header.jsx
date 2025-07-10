import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <header className="container-fluid d-flex justify-content-between align-items-center p-2 bg-light-darker border-bottom">
            <div className="d-flex align-items-center">
                <img src="/chaplin.png" alt="foto-chaplin" className="me-0 ms-3" style={{ height: '60px' }} />
                <h1 className="titulo m-0 ms-5">Charles</h1>
            </div>

            <input
                type="text"
                placeholder="Ingresar título, autor, ISBN..."
                className="form-control w-50 mt-2"
            />

            <div className="d-flex gap-3 align-items-center me-3 mt-2">
                <a href="#" className="text-dark text-decoration-none fw-semibold">Acceder / Registrarme</a>
                <a href="#" className="text-dark text-decoration-none fw-semibold">Lista de deseos<FontAwesomeIcon icon={faHeart} className='ps-2' color='black' /></a>
                <span className='fw-semibold'>$ 0,00</span>
                <a href="#"><FontAwesomeIcon icon={faCartShopping} color='black' />
                </a>
            </div>
        </header>
    );
}



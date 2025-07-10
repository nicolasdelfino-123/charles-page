import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <header className="container-fluid d-flex align-items-center p-3 bg-red border-bottom">
            <div className="d-flex align-items-center">
                <img src="/chaplin.png" alt="foto-chaplin" className="me-0 ms-3" style={{ height: '60px' }} />
                <h1 className="titulo m-0 ms-5  fw-bold">Charles</h1>
            </div>

            <input
                type="text"
                placeholder="Ingresar título, autor, ISBN..."
                className="form-control w-50 mt-2 ms-5"
            />

            <div className="d-flex gap-4 align-items-center mt-2 inicio-sesion">
                <a href="#" className="text-dark text-decoration-none fw-semibold acceder"><FontAwesomeIcon icon={faRightToBracket} className='me-2 fs-5' />Acceder / Registrarme</a>
                <a href="#" className="text-dark text-decoration-none fw-semibold">Lista de deseos<FontAwesomeIcon icon={faHeart} className='ps-2' color='black' /></a>
                <span className='fw-semibold'>$ 0,00</span>
                <a href="#"><FontAwesomeIcon icon={faCartShopping} color='black' />
                </a>
            </div>
        </header>
    );
}



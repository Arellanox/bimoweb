import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    function scrollToTop() {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 350)
    }
    return (
        <footer className=''>
            <div class="container align-self-center" id="footer">
                <div class="row mb-3 pt-5">
                    {/* Columna 1 */}
                    <div class="col-lg-3 col-sm-6 my-4">
                        <h5 class="fw-bold mb-3 text-light ">Nosotros</h5>
                        <ul class="list-unstyled">
                            <li class="mb-3">
                                <Link onClick={scrollToTop} to="/Nosotros" class="text-light text-decoration-none">¿Quiénes somos?</Link>
                            </li>
                            <li class="mb-3">
                                <Link onClick={scrollToTop} to="/Nosotros" class="text-light text-decoration-none">Nuestra Historia</Link>
                            </li>
                            <li class="mb-3">
                                <Link onClick={scrollToTop} to="/Nosotros" class="text-light text-decoration-none">Valores</Link>
                            </li>
                            <li class="mb-3">
                                <Link onClick={scrollToTop} to="/Nosotros" class="text-light text-decoration-none">Pilares de competencia</Link>
                            </li>
                            <li class="mb-3">
                                <Link onClick={scrollToTop} to="/Nosotros" class="text-light text-decoration-none">Misión</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Columna 2 */}
                    <div class="col-lg-3 col-sm-6 my-4">
                        <h5 class="fw-bold mb-3 text-light ">Servicios</h5>
                        <ul class="list-unstyled">

                            {/* <li class="d-flex justify-content-between align-items-start mb-3">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Estudios de Laboratorio</div>
                                    Biología Molecular {"<br>"}
                                    Análisis Clínicos
                                </div>
                            </li> */}

                            <li class="mb-3">
                                <Link onClick={scrollToTop} to="/Servicios" class="text-light text-decoration-none">Laboratario Clínico</Link>
                            </li>
                            <li class="mb-3">
                                <Link onClick={scrollToTop} to="/Servicios" class="text-light text-decoration-none">Laboratario Biomolecular</Link>
                            </li>
                            <li class="mb-3">
                                <Link onClick={scrollToTop} to="/Servicios" class="text-light text-decoration-none">Clínica de Checkup Preventivo</Link>
                            </li>

                        </ul>
                    </div>
                    {/* Columna 3 */}
                    <div class="col-lg-3 col-sm-6 my-4">
                        <h5 class="fw-bold mb-3 text-light">Centro de ayuda</h5>
                        <ul class="list-unstyled">
                            {/* <li class="mb-3">
                                <a href="" class="text-light text-decoration-none">Medidas de prevención</a>
                            </li>
                            <li class="mb-3">
                                <a href="" class="text-light text-decoration-none">Trabaja con nosotros</a>
                            </li>
                            <li class="">
                                <a href="" class="text-light text-decoration-none">Política de Privacidad</a>
                            </li> */}
                            <li class="mb-3">
                                <Link onClick={scrollToTop} to="/Privacidad" class="text-light text-decoration-none">Aviso de Privacidad</Link>
                            </li>
                            <li class="mb-3">
                                <a href="https://view.forms.app/bimotalentohumano/formulario-de-cuestionario-de-servicio-al-cliente-2-1" class="text-light text-decoration-none" target='parent'>Encuesta de satisfacción</a>
                            </li>
                        </ul>
                    </div>
                    {/* Mas informacion */}
                    <div class="col-lg-3 col-sm-6 my-4">
                        <h5 class="fw-bold mb-3 text-light ">Diagnóstico Biomolecular</h5>
                        <ul class="list-unstyled">
                            <li class="mb-3 text-light">
                                Avenida José Pages Llergo, Núm. 150,
                                Colonia Arboledas, Código Postal: 86079,
                                Villahermosa, Centro, Tabasco.
                            </li>
                            <li>
                                <ul class="list-inline">
                                    <li class="list-inline-item me-3">
                                        <a href="https://www.facebook.com/profile.php?id=100089977981020&mibextid=ZbWKwL" className='text-light' target='parent'>
                                            <i class='bx bxl-facebook-circle bx-tada-hover' ></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item me-3">
                                        <a href="https://instagram.com/bimosalud?igshid=OGQ5ZDc2ODk2ZA==" className='text-light' target='parent'>
                                            <i class='bx bxl-instagram-alt bx-tada-hover'></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item ">
                                        <a href="https://wa.me/529932154479" className='text-light' target='parent'>
                                            <i class='bx bxl-whatsapp bx-tada-hover' ></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div class="border-top py-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 text-light">
                            <small> © {new Date().getFullYear()} BIMO todos los derecho reservados</small>
                        </div>
                        {/* <div class="col-lg-6 col-md-12">
                            <ul class="list-unstyled text-lg-end">
                                <li class="list-inline-item">
                                    <a href="" class="text-light text-decoration-none"><small> Terminos y condiciones</small></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="" class="text-light text-decoration-none"><small> Aviso de privacidad</small></a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer

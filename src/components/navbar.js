import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showWhatsappHint, setShowWhatsappHint] = useState(true);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 200;
        const targetElement = document.getElementById("navbar--main");
        const btnfloat = document.getElementById("btn-float");

        if (scrollPosition > scrollThreshold) {
            targetElement.classList.add("bg--navbar--after");
            btnfloat.classList.add("btn-float-hide")
        } else {
            targetElement.classList.remove("bg--navbar--after");
            btnfloat.classList.remove("btn-float-hide")

        }
    };


    function scrollToTop() {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            document.getElementById('btn--close').click()
        }, 350)
    }

    useEffect(() => {
        // scrollToTop()
        window.addEventListener("scroll", handleScroll);

        // Limpieza del efecto para remover el event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Initialize Bootstrap tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        if (window.bootstrap) {
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        }
    }, []);


    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark" id="navbar--main">
                <div class="container-fluid px-5">
                    <Link to="/" onClick={scrollToTop} class="navbar-brand logo fw-bold" style={{ fontSize: "30px" }} href="#">

                        <img src="assets/img/logo_blanco_sinfondo.png" style={{ width: "18vh" }} className='img-fluid' alt="" />
                    </Link>
                    {/* <button class="navbar-toggler d-lg-none" id='btn-bootstrap' type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <motion.div className=' text-light' id='btn--navbar' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                        whileHover={{
                            scale: 1.3
                        }}
                        style={{
                            fontSize: "30px"
                        }}>
                        <i class="bi bi-list"></i>
                    </motion.div>
                    <div class="collapse navbar-collapse  " id="collapsibleNavId">
                        <ul class="navbar-nav ms-auto gap-4 ">
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/" class="nav-link active" href="#competencias">Inicio +</Link>
                            </li>
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/Nosotros" class="nav-link active" href="#">Nosotros +</Link>
                            </li>
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/Servicios" class="nav-link active" href="#">Servicios +</Link>
                            </li>
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/Contacto" class="nav-link active" href="#">Contacto +</Link>
                            </li>
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/Promociones" class="nav-link active" href="#">Promociones +</Link>
                            </li>
                            <li className="nav-item fw-bold">
                                <a href="https://bimo.com.mx/blog/" className="nav-link active" target="_blank" rel="noopener noreferrer">
                                    Blog +
                                </a>
                            </li>
                        </ul>
                        {/* <ul class="navbar-nav ">
                            <button className='btn btn-login'>Login</button>
                        </ul> */}
                    </div>
                </div>
            </nav>

            <div class="offcanvas offcanvas-end bg-bimo text-light" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{
                width: "35vh"
            }}>
                <div class="offcanvas-header d-flex justify-content-center offcanvas--head">
                    {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">BIMO</h5> */}
                    <img src="assets/img/logo_blanco_sinfondo.png" style={{ width: "15vh" }} className='img-fluid' alt="" />
                    <button type="button" id='btn--close' class="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr className='m-0' />
                <div class="offcanvas-body">
                    <div>
                        <ul class="navbar-nav mx-auto gap-1 ">
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/" class="nav-link active" href="#competencias">
                                    <i class="bi bi-house-door-fill me-2"></i>
                                    Inicio
                                </Link>
                            </li>
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/Nosotros" class="nav-link active" href="#">
                                    <i class="bi bi-book-fill me-2"></i>
                                    Nosotros
                                </Link>
                            </li>
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/Servicios" class="nav-link active" href="#">
                                    <i class="bi bi-file-earmark-text-fill me-2"></i>
                                    Servicios
                                </Link>
                            </li>
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/Promociones" class="nav-link active" href="#">
                                    <i class="bi bi-file-earmark-text-fill me-2"></i>
                                    Promociones
                                </Link>
                            </li>
                            <li class="nav-item fw-bold ">
                                <Link onClick={scrollToTop} to="/Contacto" class="nav-link active" href="#">
                                    <i class="bi bi-envelope-fill me-2"></i>
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <hr className='m-0 p-0' /> */}
                {/* <div className='d-flex justify-content-center py-3  offcanvas--footer'>

                </div> */}
            </div>

            <div className='btn--float btn-float-show h-100 ' id='btn-float'>
                <motion.div
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.09 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%",
                        translateY: "-5px",
                        transition: {
                            duration: 0.2
                        }
                    }}>
                    <motion.button
                        className='btn shadow text-light' style={{ width: "50px", height: "50px", borderRadius: "30%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}><i class="fa-solid fa-arrow-up"></i>
                    </motion.button>
                </motion.div>
            </div>

            <div style={{ position: "fixed", bottom: "5vh", right: "5vh", zIndex: "1000", display: "flex", alignItems: "center", gap: "10px" }} >
                {showWhatsappHint && (
                    <div className="animate__animated animate__fadeInLeft" style={{
                        backgroundColor: "white",
                        color: "var(--pantone-7408-color)",
                        padding: "8px 15px",
                        borderRadius: "15px 15px 0 15px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        Cotiza aquí
                        <button
                            onClick={() => setShowWhatsappHint(false)}
                            style={{
                                border: "none",
                                background: "transparent",
                                padding: "0",
                                display: "flex",
                                alignItems: "center",
                                color: "#999",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}
                        >
                            <i className="bi bi-x-circle-fill"></i>
                        </button>
                    </div>
                )}
                <a href="https://wa.me/9932327502?text=Hola%20quiero%20realizar%20una%20cotizacion"
                    target="_blank"
                    className='btn float-hover'
                    onClick={() => setShowWhatsappHint(false)}
                    data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Cotiza con Mati nuestro asistente virtual"
                    style={{
                        width: "50px", height: "50px", borderRadius: "30%", display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", backgroundColor: "var(--pantone-7408-color)", color: "white"
                    }}>
                    <i className="bi bi-whatsapp"></i>
                </a>
            </div>
        </div >
    )
}

export default Navbar

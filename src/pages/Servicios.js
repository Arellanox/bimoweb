import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Loader from '../components/loader';

import { useState, useEffect } from "react";



const Servicios = () => {

    // const [isLoading, setIsLoading] = useState(true)
    // useEffect(() => {
    //     document.body.style.overflow = 'hidden';
    //     setTimeout(() => {
    //         setIsLoading(false);
    //         document.body.style.overflow = 'auto';
    //     }, 500);
    // }, [])


    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }, [])

    //Lista de servicios
    const categorias = [
        {
            nombre: "Laboratorio",
            icono: "fa-flask",
            image: 'assets/img/logotipo/lab_icon.png',
            titulos: [
                {
                    nombre: "Análisis Clínicos",
                    icono: "fa-microscope",
                    clase: "lab-analysis",
                    subtitulos: [
                        "Química Clínica",
                        "Hematología",
                        "Coagulación",
                        "Pruebas Especiales",
                        "Bacteriología"
                    ]
                },
                {
                    nombre: "Biología Molecular",
                    icono: "fa-dna",
                    clase: "molecular-biology",
                    subtitulos: [
                        "Pruebas por PCR en Tiempo Real",
                        "Antígeno SARS-CoV-2",
                        "Detección de 24 tipos de Virus del Papiloma Humano (VPH)",
                        "Detección de 9 patógenos de Enfermedades de transmisión sexual"
                    ]
                }
            ]
        },
        {
            nombre: "Exámenes Médicos",
            icono: "fa-stethoscope",
            image: 'assets/img/logotipo/check_iconm.png',
            titulos: [
                { nombre: "Check up Empresarial", icono: "fa-briefcase-medical" },
                { nombre: "Check up Preventivo", icono: "fa-user-md" },
                { nombre: "Ultrasonido", icono: "fa-soundcloud" },
                { nombre: "Rayos X", icono: "fa-x-ray" },
                { nombre: "Electrocardiograma", icono: "fa-heartbeat" },
                { nombre: "Audiometría", icono: "fa-volume-up" },
                { nombre: "Espirometría", icono: "fa-lungs" },
                { nombre: "Valoración Nutricional", icono: "fa-weight" },
                { nombre: "Infectología", icono: "fa-virus" },
                { nombre: "Endocrinología", icono: "fa-solid fa-syringe" }, // Asegúrate de que "fa-solid fa-syringe" es la clase correcta para tu ícono.
                { nombre: "Medicina Interna", icono: "fa-stethoscope" }
            ]
        }
    ];


    return (
        <>
            {/* Titulo de la pagina */}
            <title>BIMO | Servicios, Laboratorio / Exámenes médicos</title>
            {/* Loader */}
            {/* {isLoading && <Loader />} */}
            {/* Seccion Hero de la pagina */}
            <div className="bg-cover-page bg-corazon-tabasqueño">
                <div className='text-container'>
                    <h2 className='text-center text-light display-5'>Servicios</h2>
                    <h3 className='text-center text-pantone' style={{
                        fontSize: "1.25rem"
                    }}>
                        Laboratorio / Exámenes médicos
                    </h3>
                </div>
            </div>
            <section id="Servicios">
                <div className="container my-5">
                    <div className="row" id="cartera-servicios">

                        {/* Columna 1, laboratorios */}
                        <div className="col-12 col-md-6">
                            <div className="service-card shadow-sm position-relative">
                                <h2>
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        layout
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            ease: "linear",
                                            duration: 0.2,
                                            delay: 0.1
                                        }}
                                    >
                                        <i className={`fa ${categorias[0].icono} mx-3`}></i>{categorias[0].nombre}
                                    </motion.div>
                                </h2>
                                <ul style={{
                                    padding: '17px', marginBottom: '0px'
                                }}>
                                    {categorias[0].titulos.map((titulo, index) => (
                                        <li style={{
                                            marginBottom: '0px'
                                        }} key={index}>
                                            <motion.div
                                                whileHover={{ scale: 1.01 }}
                                                layout
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    ease: "linear",
                                                    duration: 0.2,
                                                    delay: 0.15 + (index * 0.05)
                                                }}
                                            >
                                                <i className={`fa ${titulo.icono} mx-3`}></i>
                                                {titulo.nombre}
                                                <div className="secondary-line"></div>
                                                {/* Aquí renderizamos la sublista si está presente */}
                                                {titulo.subtitulos &&
                                                    <ul style={{
                                                        padding: '2px', marginLeft: '50px'
                                                    }}>
                                                        {titulo.subtitulos.map(subtitulo => (
                                                            <li style={{
                                                                margin: '0px', padding: '1px'
                                                            }}>{subtitulo}</li>
                                                        ))}
                                                    </ul>
                                                }
                                            </motion.div>
                                        </li>
                                    ))}
                                </ul>
                                <div className='d-flex justify-content-center'>
                                    <img src={categorias[0].image} alt={categorias[0].nombre} className="service-image img-fluid" />
                                </div>
                            </div>



                            {/* Grid Imagenes */}
                            <div className="image-grid d-none d-md-block mt-3">
                                <motion.div
                                    whileHover={{
                                        scale: 1.01
                                    }}
                                    layout
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        ease: "linear",
                                        duration: 0.2,
                                        delay: 0.2
                                    }}>
                                    <img src="assets/img/checkups/equipo-oftalmo.jpg" alt="Equipo Oftalmológico" className="shadow-sm img-rectangle" />
                                </motion.div>
                                <motion.div className="vertical-images"
                                    whileHover={{
                                        scale: 1.01
                                    }}
                                    layout
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        ease: "linear",
                                        duration: 0.2,
                                    }}>
                                    <img src="assets/img/laboratorio/laboratorio1.webp" alt="Laboratorio de alta calidad" className="shadow-sm img-high-quality" />
                                    <img src="assets/img/checkups/rx_cuello.jpg" alt="Rayos X de cuello" className="shadow-sm img-small-high" />
                                </motion.div>
                            </div>


                        </div>

                        {/* Columna 2, examenes */}
                        <div className="col-12 col-md-6">
                            <div className="service-card shadow-sm position-relative">
                                <h2>
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        layout
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            ease: "linear",
                                            duration: 0.2,
                                            delay: 0.1
                                        }}
                                    >
                                        <i className={`fa ${categorias[1].icono} mx-3`}></i>{categorias[1].nombre}
                                    </motion.div>
                                </h2>
                                <ul>
                                    {categorias[1].titulos.map((titulo, index) => (
                                        <li className={titulo.clase} key={index}>
                                            <motion.div
                                                whileHover={{ scale: 1.01 }}
                                                layout
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    ease: "linear",
                                                    duration: 0.2,
                                                    delay: 0.15 + (index * 0.05)
                                                }}
                                            >
                                                <i className={`fa ${titulo.icono} mx-3`}></i>
                                                {titulo.nombre}
                                                <div className="secondary-line"></div>
                                            </motion.div>
                                        </li>
                                    ))}
                                </ul>
                                <div className='d-flex justify-content-center'>
                                    <img src={categorias[1].image} alt={categorias[1].nombre} className="service-image img-fluid" />
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </section >
        </>
    )
}

export default Servicios
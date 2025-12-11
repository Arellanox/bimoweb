import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Loader from '../components/loader';

const Nosotros = () => {
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden';
    //     setIsLoading(false);
    //     document.body.style.overflow = 'auto';
    // }, [])


    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }, [])
    // Pilares existentes
    const pilares = [
        {
            titulo: 'Infraestructura diseñada para la atención',
            informacion: `Diseñamos todos nuestros espacios para propiciar una ambiente cómodo, seguro y vanguardista que permita a las personas que hacen uso de nuestros servicios, sentirse con la confianza de saberse en las manos de profesionales.`,
            background: 'card--bg2 h-100',
            initial: { y: 100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 100, opacity: 0 },
            icon: <i class="bi bi-building  me-3 "></i>,
            url: "assets/img/icons/cuarto-de-cirugia.png"
        },
        {
            titulo: 'Tecnología adecuada para la prevención',
            informacion: `Contamos con equipamiento médico óptimo, cuidadosamente seleccionado para atender cada uno de los retos clínicos que se presentan todos los días. 
Estamos comprometidos con la actualización de nuestras tecnologías de diagnóstico.`,
            background: 'card--bg3 h-100',
            initial: { y: -100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -100, opacity: 0 },
            icon: <i class="fa-solid fa-shield me-3"></i>,
            url: "assets/img/icons/tomografia-computarizada.png"
        },
        {
            titulo: 'Profesionales de la salud al servicio de las personas',
            informacion: `Buscamos y seguimos formando a los mejores profesionales de salud, para que al emitir un diagnóstico, este sea  confiable, verificable y reproducible por nuestros pares de profesión.`,
            background: 'card--bg h-100',
            initial: { y: 100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 100, opacity: 0 },
            icon: <i class="bi bi-person-circle me-3"></i>,
            url: "assets/img/icons/medico.png"
        },
        {
            titulo: 'Precisión y rapidez en la entrega de resultados',
            informacion: `El diagnóstico, las recomendaciones y los tratamientos no sólo están dictados por números hechos en una prueba, sino que son tratados, validados, interpretados y comunicados con la disciplina,  consideración y el respeto total a la humanidad de la persona.`,
            background: 'card--bg4 h-100',
            initial: { y: -100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -100, opacity: 0 },
            icon: <i class="bi bi-calendar2-check-fill me-3"></i>,
            url: "assets/img/icons/resultado-medico.png"
        },
    ]

    const Valores = [
        {
            titulo: "Liderazgo ",
            icono: <i class="fa-solid fa-universal-access me-3"></i>
        }, {
            titulo: "Competitividad ",
            icono: <i class="fa-solid fa-user-doctor me-3"></i>
        }, {

            titulo: "Responsabilidad ",
            icono: <i class="fa-solid fa-person-walking-dashed-line-arrow-right me-3"></i>
        }, {

            titulo: "Transparencia/ honestidad",
            icono: <i class="fa-solid fa-person-half-dress me-3"></i>
        }, {

            titulo: "Confianza",
            icono: < i class="fa-solid fa-user-group me-3" ></i >
        }, {

            titulo: "Solidaridad ",
            icono: <i class="fa-solid fa-handshake-angle me-3"></i>
        }
    ]


    return (
        <>

            {/* Titulo de la pagina */}
            <title>BIMO | Nosotros </title>
            {/* Loader */}
            {/* {isLoading && <Loader />} */}
            {/* Seccion Hero de la pagina */}
            <div className="bg-cover-page bg-serotonina">
                <div className='text-container'>
                    <h2 className='text-center text-light display-5'>
                        Nosotros
                    </h2>
                    <h3 className='text-center text-pantone' style={{
                        fontSize: "1.25rem"
                    }}>Lo que nos define</h3>
                </div>
            </div>
            {/* Contenido de la paginas */}
            <section id="Nosotros" className="h-100">
                <div className="container-fluid p-5">
                    {/* Quienes Somos */}
                    <div id='NuestraHistoria'></div>
                    <div className="row">
                        <div className="col-12">
                            <h2 className='text-center'>Quienes somos</h2>
                            <p className='text-p text-start'>
                                Somos un Laboratorio y Centro de Diagnóstico médico-preventivo.
                                Ofrecemos programas personalizados de <strong>EVALUACIÓN MÉDICA INTEGRAL </strong>
                                atendiendo las necesidades específicas de nuestros pacientes y clientes de la mano de
                                profesionales altamente calificados con un enfoque humano y de calidad, en un  espacio
                                confortable a través de instalaciones y equipos de vanguardia.
                            </p>
                        </div>
                    </div>

                    {/* Nuestra Historia */}
                    <div className="row my-5">
                        <div className="col-12 col-xl-6 col-xxl-6 mb-5 d-flex align-content-center">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                layout
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: "linear",
                                    duration: 0.2,
                                    delay: 0.15 + (1 * 0.05)
                                }}
                                className="img--container d-flex justify-content-center">
                                <img src="assets/img/instalaciones/sala_espera_vista.jpg" className="img-fluid shadow-sm rounded-3" alt="" />
                            </motion.div>
                        </div>
                        <div className="col-12 col-xl-6 col-xxl-6 mb-5">
                            <motion.div
                                layout
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: "linear",
                                    duration: 0.2,
                                    delay: 0.15 + (2 * 0.05)
                                }}>
                                <h2>Nuestra Historia</h2>
                                {/* <p className='text-justify text-p'>
                                    Ante las crisis e incertidumbre mundial provocada por el virus SARS-CoV-2 en el año 2020. En México al igual
                                    que muchos países de Latinoamérica quedó expuesto la falta de servicios eficientes y vanguardistas para hacer
                                    frente a los nuevos retos de salud emergentes.
                                    <br />
                                    <br />
                                    Es así como ante la nueva realidad y evidente necesidad de
                                    alternativas vanguardistas en el sector salud, inicia operaciones Diagnóstico Biomolecular “bimo” en el mes de julio 2020 en el estado de Tabasco como una empresa  mexicana  joven, innovadora, dinámica y   comprometida con el bienestar social y del medio ambiente que integra tecnologías biomoleculares y genómicas a los procesos de diagnóstico, tratamientos y prevención de las enfermedades.
                                </p> */}
                                <p className='text-start text-p'>
                                    En medio de la crisis y la incertidumbre mundial desencadenadas por el virus SARS-CoV-2 en 2020, México, al igual
                                    que numerosos países de América Latina, se enfrentó a la falta de servicios de salud eficaces y avanzados
                                    para abordar los nuevos desafíos emergentes en el ámbito de la salud. Fue en este contexto que
                                    Diagnóstico Biomolecular "bimo" inició sus operaciones en julio de 2020 en el estado de Tabasco
                                    como una empresa mexicana joven, innovadora, dinámica y comprometida con el bienestar social y
                                    la preservación del medio ambiente integrando  tecnologías biomoleculares y genómicas en los
                                    procesos de diagnóstico, tratamiento y prevención de enfermedades, en respuesta a la nueva realidad
                                    y la evidente demanda de soluciones vanguardistas en el sector de la salud.
                                </p>
                            </motion.div>
                        </div>

                    </div>

                    {/* Politica de calidad  */}
                    <div className="row my-5">
                        <div className="col-12 col-xl-6 col-xxl-6">
                            <motion.div
                                layout
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: "linear",
                                    duration: 0.2,
                                    delay: 0.15 + (3 * 0.05)
                                }}>
                                <h2>Política de calidad</h2>
                                <p className='text-p text-start'>
                                    Nuestro centro de Diagnóstico médico-preventivo está comprometido a proporcionar a las personas, poblaciones y ecosistemas, diagnósticos y resultados confiables dentro de un marco legal normativo e imparcial, en el cumplimento de los principios éticos y científicos. Su alta dirección y colaboradores se encuentran comprometidos en cumplir de manera coherente los requisitos de las normas, NMX-CC-9001-IMNC-2015 y NMX-EC15189-INMC-2015, con los procedimientos y políticas que conforman nuestro Sistema Integrado de Gestión (SIG) y en trabajar bajo las buenas prácticas determinadas para los laboratorios; todo lo anterior mediante el desarrollo y mantenimiento de competencias técnicas de los colaboradores con el fin de ejecutar sus funciones y que estas no afecten el resultado ni el mejoramiento continuo de la eficacia de los procesos.


                                </p>
                            </motion.div>
                        </div>
                        <div className="col-12 col-xl-6 col-xxl-6 mb-5 d-flex align-content-center">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                layout
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: "linear",
                                    duration: 0.2,
                                    delay: 0.15 + (4 * 0.05)
                                }}
                                className="img--container d-flex justify-content-center">
                                <img src="assets/img/instalaciones/recepcion_bn.jpg" className="img-fluid shadow-sm rounded-3" alt="" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Imagen de la comunidad de bimers */}
            {/* <section className='bg-section-nosotros' style={{
                height: "50vh"
            }}>
            </section> */}
            {/* Valores, Pilares de competencia, Misión */}
            <section style={{
                height: "max-content"
            }}>
                <div className="container-fluid p-5">
                    <div className="row">
                        {/* Valores */}
                        <div className="col-12 col-xxl-6 col-xl-6  p-4">
                            <h1 className='text-center'>Nuestros Valores</h1>
                            <div className="row gap-3 my-3">
                                {
                                    Valores.map((item, i) => (
                                        <motion.div className="col-12 shadow-sm  valores--item " style={{
                                            background: "#fff"
                                        }}
                                            whileHover={{ scale: 1.02 }}
                                            layout
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{
                                                ease: "linear",
                                                duration: 0.2,
                                                delay: 0.15 + (i * 0.05)
                                            }}>
                                            <p className='text-p fw-bold my-auto py-3'>
                                                {item.icono}
                                                {item.titulo}
                                            </p>

                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Pilares de competencia */}
                        <div className="col-12 col-xxl-6 col-xl-6  p-4">
                            <h1 className='text-center'>Pilares de competencia</h1>
                            <div className="row gap-3 my-3">
                                {
                                    pilares.map((item, i) => (
                                        <motion.div className="col-12 shadow-sm  valores--item " style={{
                                            background: "#fff"
                                        }}
                                            whileHover={{ scale: 1.02 }}
                                            layout
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{
                                                ease: "linear",
                                                duration: 0.2,
                                                delay: 0.15 + (i * 0.05)
                                            }}>
                                            <p className='text-p fw-bold my-auto py-3'>
                                                {item.icon}
                                                {item.titulo}
                                            </p>

                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* Misión */}
                    <div className="row">
                        <div className="col-12">
                            <h1 className='text-center'>Misión</h1>
                            <p className='text-p fw-semibold text-start'>
                                Somos un laboratorio de integración de tecnologías biomoleculares  genómicas y bioinformáticas en los procesos de diagnóstico, tratamiento y prevención de las enfermedades que afectan a las personas, poblaciones y ecosistemas, a costos asequibles, de la mano de la excelencia de nuestros colaboradores, con la calidad requerida, cumpliendo con el marco legal aplicable y en armonía con el ambiente.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nosotros
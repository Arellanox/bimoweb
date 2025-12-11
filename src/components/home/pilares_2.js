import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'

const Pilares2 = () => {

    // Pilares existentes
    const pilares = [
        {
            titulo: 'Infraestructura diseñada para la atención',
            informacion: `Diseñamos todos nuestros espacios para propiciar una ambiente cómodo, seguro y vanguardista que permita a las personas que hacen uso de nuestros servicios, sentirse con la confianza de saberse en las manos de profesionales.`,
            background: 'card--bg2 h-100',
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -50, opacity: 0 },
            icon: <i class="bi bi-building  text-light  "></i>,
            url: "assets/img/icons/rayos-x.png"
        },
        {
            titulo: 'Tecnología adecuada para la prevención',
            informacion: `Contamos con equipamiento médico óptimo, cuidadosamente seleccionado para atender cada uno de los retos clínicos que se presentan todos los días. 
Estamos comprometidos con la actualización de nuestras tecnologías de diagnóstico.`,
            background: 'card--bg3 h-100',
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -50, opacity: 0 },
            icon: <i class="bi bi-arrow-right"></i>,
            url: "assets/img/icons/estetoscopio.png"
        },
        {
            titulo: 'Profesionales de la salud al servicio de las personas',
            informacion: `Buscamos y seguimos formando a los mejores profesionales de salud, para que al emitir un diagnóstico, este sea  confiable, verificable y reproducible por nuestros pares de profesión.`,
            background: 'card--bg h-100',
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -50, opacity: 0 },
            icon: <i class="bi bi-person-circle text-light"></i>,
            url: "assets/img/icons/medico.png"
        },
        {
            titulo: 'Precisión y rapidez en la entrega de resultados',
            informacion: `El diagnóstico, las recomendaciones y los tratamientos no sólo están dictados por números hechos en una prueba, sino que son tratados, validados, interpretados y comunicados con la disciplina,  consideración y el respeto total a la humanidad de la persona.`,
            background: 'card--bg4 h-100',
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -50, opacity: 0 },
            icon: <i class="bi bi-calendar2-check-fill text-light"></i>,
            url: "assets/img/icons/resultado-medico.png"
        },
    ]

    const variants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.3,
            },
        }),
        hidden: { opacity: 0 },
    }

    return (
        <div className="row">
            {
                pilares.map((item, i) => (
                    <div className="col-12 col-xxl-3 col-xl-3 col-md-6 card--item-card">
                        <motion.div className=" rounded-3 p-3 card--item shadow"
                            whileHover={{
                                scale: 1.01
                            }}
                            layout
                            initial={item.initial}
                            whileInView={item.animate}
                            transition={{
                                // ease: "linear",
                                // type: "spring",
                                duration: 0.5,
                            }}
                        >

                            <div className="card--header" style={{
                                position: "relative"
                            }}>
                                <div className="card--picture" style={{
                                    height: "215px",
                                    maxHeight: "215px",
                                    overflow: "hidden",
                                    borderRadius: "15px",
                                    position: "relative"
                                }}>
                                    <div className={item.background + " picture"} style={{
                                        height: "100%",
                                        width: "100%",
                                        position: "relative"
                                    }}>
                                    </div>

                                </div>
                                <div className='bg-primary rounded-1 d-flex offIcon' style={{
                                    height: "70px",
                                    width: "70px",
                                    position: "absolute",
                                    bottom: "-8px",
                                    right: "20px"
                                }}>
                                    <p className='d-flex my-auto mx-auto'>
                                        <img src={item.url} alt="" className='text-light' style={{
                                            maxWidth: "5vh"
                                        }} />
                                    </p>
                                </div>
                            </div>
                            <div className="card--text mt-4">
                                <div>
                                    <h4>{item.titulo} </h4>
                                </div>
                                <div>
                                    <p>
                                        {item.informacion}
                                    </p>
                                </div>
                            </div>
                            {/* <div className="card--footer">
                                <a className='my-auto' href="">Read More <i class="bi bi-arrow-right"></i></a>
                            </div> */}
                        </motion.div>
                    </div>
                ))
            }

        </div>
    )
}


export default Pilares2
import { AnimatePresence, motion } from 'framer-motion'
import ObserveComponent from '../observator';
import { useState } from 'react';

const Pilares_home = () => {

    // Onclick
    const [selectedPilar, setSelectedPilar] = useState(null);

    // Pilares existentes
    const pilares = [
        {
            titulo: 'Infraestructura diseñada para la atención',
            informacion: `Diseñamos todos nuestros espacios para propiciar una ambiente cómodo, seguro y vanguardista que permita a las personas que hacen uso de nuestros servicios, sentirse con la confianza de saberse en las manos de profesionales.`,
            background: 'card--bg2 h-100',
            initial: { y: 100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 100, opacity: 0 }
        },
        {
            titulo: 'Tecnología adecuada para la prevención',
            informacion: `Contamos con equipamiento médico óptimo, cuidadosamente seleccionado para atender cada uno de los retos clínicos que se presentan todos los días. 
Estamos comprometidos con la actualización de nuestras tecnologías de diagnóstico.`,
            background: 'card--bg3 h-100',
            initial: { y: -100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -100, opacity: 0 }
        },
        {
            titulo: 'Profesionales de la salud al servicio de las personas',
            informacion: `Buscamos y seguimos formando a los mejores profesionales de salud, para que al emitir un diagnóstico, este sea  confiable, verificable y reproducible por nuestros pares de profesión.`,
            background: 'card--bg h-100',
            initial: { y: 100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 100, opacity: 0 }
        },
        {
            titulo: 'Precisión y rapidez en la entrega de resultados',
            informacion: `El diagnóstico, las recomendaciones y los tratamientos no sólo están dictados por números hechos en una prueba, sino que son tratados, validados, interpretados y comunicados con la disciplina,  consideración y el respeto total a la humanidad de la persona.`,
            background: 'card--bg4 h-100',
            initial: { y: -100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -100, opacity: 0 }
        },
    ]

    return (
        <div className="row gap-5 justify-content-center d-flex">

            {pilares.map((item, index) => (
                <ObserveComponent repeat={1}
                    style={"cards d-flex justify-content-center align-self-center my-auto align-items-center align-content-center col-11 col-xl-3 col-xxl col-lg-3 col-md-6 "}>
                    {
                        isVisible => (
                            <AnimatePresence>
                                {
                                    isVisible && (
                                        <motion.div
                                            layoutId={`pilar-${index}`}
                                            onClick={() => setSelectedPilar(item)}
                                            initial={item.initial}
                                            // transition={{ duration: 1 }}
                                            animate={item.animate}
                                            exit={item.exit}
                                            transition={{
                                                ease: "linear",
                                                duration: .7,
                                            }}
                                            className={item.background}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div className="shadow-sm rounded-0 p-3">
                                                <div className="front">
                                                    <div className="card--title my-5">
                                                        <p>{item.titulo}<span class="color--punto-2">.</span></p>
                                                    </div>
                                                    <div className="card--footer fw-bold mx-auto d-flex justify-content-center my-5">
                                                        <a href="#">Learn More</a>
                                                    </div>
                                                </div>
                                                <div className="back">
                                                    <div className="card--body pb-5 px-2 fw-semibold  text-light">
                                                        {item.informacion}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        )
                    }
                </ObserveComponent>
            ))
            }

            <AnimatePresence>
                {selectedPilar && (
                    <motion.div
                        layoutId={`pilar-${pilares.findIndex(p => p === selectedPilar)}`}
                        onClick={() => setSelectedPilar(null)}

                    >

                        <div className="shadow-sm rounded-0 p-3">
                            <div className="front">
                                <div className="card--title my-5">
                                    {selectedPilar.titulo}
                                </div>
                                <div className="card--footer fw-bold mx-auto d-flex justify-content-center my-5">
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                            <div className="back">
                                <div className="card--body pb-5 px-2 fw-semibold  text-light">
                                    {selectedPilar.informacion}
                                </div>
                            </div>
                        </div>

                        <button onClick={() => setSelectedPilar(null)}>Cerrar</button>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default Pilares_home;

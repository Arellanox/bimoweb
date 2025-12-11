import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import ObserveComponent from '../observator';


const Presentacion = () => {

    const textRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "center center"]
    });



    return (
        <motion.div class="col-12 col-xxl-5 col-xl-6 col-md-12 col-lg-12 p-2 mx-auto rounded-1 card--welcome " style={{ zIndex: "3", marginTop: "71px" }} >

            <div class="row" ref={textRef} >

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // exit={{ y: 50, opacity: 0 }}
                    transition={{
                        ease: "linear",
                        duration: 0.5,
                    }}
                    className="header  col-12">
                    {/* header_welcome-video */}
                    <div class="title2 px-3 ">¿Quiénes Somos?</div>
                    <div class="display-5 title px-3 titulo--welcome" style={{ marginBottom: "9.5vh", marginTop: "3.5vh" }}>
                        Somos un Laboratorio y Centro de Diagnóstico médico-preventivo<span class="color--punto-2">.</span>
                    </div>
                </motion.div>
                <motion.div class="card--content rounded-1 col-12" style={{
                    // textAlign: "justify",
                    // backgroundColor: " #f8f8f8",
                    opacity: scrollYProgress
                }} >
                    <div class="text text-pantone-2 p-3">Nos dedicamos a ti. En el corazón de nuestra labor yace el profundo deseo de
                        comprender y atender tus necesidades de salud. Nuestra especialidad: programas de <strong class="text-second"> EVALUACIÓN MÉDICA INTEGRAL </strong>,
                        diseñados a medida para cada persona. Con un equipo apasionado y tecnología avanzada, trabajamos cada día para garantizar que tu experiencia
                        con nosotros no sea simplemente una visita médica, sino un momento de cuidado, atención y, sobre todo, entendimiento.
                        Porque creemos que cada detalle importa y que detrás de cada evaluación, hay una historia y un individuo que merece lo mejor.
                    </div>
                    <div class="mt-4 p-3">
                        <ul class="custom-list">
                            <li>Liderazgo</li>
                            <li>Competitividad</li>
                            <li>Responsabilidad</li>
                            <li>Transparencia/Honestidad</li>
                            <li>Confianza</li>
                            <li>Solidaridad</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}


export default Presentacion;
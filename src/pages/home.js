import React, { useEffect, useRef, useState } from 'react'
import SliderTestimony from '../components/slider-testimony'
import Pilares_home from '../components/home/pilares.jsx'
import Prueba_frame_motion from '../components/prueba_frame_motion';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import ObserveComponent from '../components/observator';
import Presentacion from '../components/home/presentacion';
import Pilares2 from '../components/home/pilares_2';
import { useLocation } from 'react-router-dom';
import Loader from '../components/loader';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isVisibleVideo, setIsVisibleVideo] = useState(true)
    const [isVisibleBackground, setIsVisibleBackground] = useState()
    const heroRef = useRef(null)
    const welcomeRef = useRef(null)
    const location = useLocation()


    useEffect(() => {
        // Prueba esto varias veces y checa si no te tira el error de heroRef.current is null
        // Si sigue pasandoo por que ya me paso, comenta toda la linea desde la 44 hasta la 84 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';
        }, 500);
    }, [])


    function scrollNextSection() {
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        })
    }

    const handleScroll = () => {
        if (location.pathname === "/") {
            setTimeout(() => {
                const heroRect = heroRef.current.getBoundingClientRect()
                const welcomeRect = welcomeRef.current.getBoundingClientRect()

                if (heroRect.top <= -1000) {
                    setIsVisibleVideo(false)
                } else {
                    setIsVisibleVideo(true)
                }

                if (welcomeRect.top <= -396 || welcomeRect.bottom >= 2107) {
                    setIsVisibleBackground(false)
                } else {
                    setIsVisibleBackground(true)
                }
            }, 500)
        }
    }

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }, [])


    useEffect(() => {
        if (location.pathname !== '/Contacto') {
            window.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (location.pathname !== '/Contacto') {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [location.pathname])



    return (
        <div id='home'>
            {isLoading && <Loader />}
            {/* Titulo de la pagina */}
            <title>Home | Diagnóstico Biomolecular</title>

            {/* Section Hero */}
            <section ref={heroRef} id="hero" className="hero--container" style={{ height: "max-content", overflow: "hidden", position: "relative" }}>
                <div className="hero--video">
                    <video autoPlay muted loop>
                        {
                            isVisibleVideo && (
                                <source src="assets/img/video2.mp4" type="video/mp4" />
                            )
                        }
                    </video>
                </div>
                <div className="">
                    <div className="row">
                        <div className='col col-xxl-8 col-md-12 col-xl-8 text-video'>
                            <div className=''>
                                <motion.div
                                    className='d-flex'
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    exit={{ x: 50, opacity: 0 }}
                                    transition={{
                                        ease: "linear",
                                        duration: 0.5,
                                    }}>
                                    <span className="text--title-2  "
                                        style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                                        Diagnóstico
                                        Biomolecular</span>
                                </motion.div>

                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    transition={{
                                        ease: "linear",
                                        duration: 0.7,
                                    }}>
                                    <motion.h1
                                        className="text--title-1 text-light"
                                    >
                                        Innovación Médica para su Bienestar<span className="color--punto-2">.</span>
                                    </motion.h1>

                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                transition={{
                                    ease: "linear",
                                    duration: 0.7,
                                }}
                                style={{
                                }}
                            >
                                <motion.button
                                    onClick={scrollNextSection}
                                    whileHover={{ scale: 1.2 }}
                                    className="rounded-1     btn btn-primary fw-bold px-4 py-3">
                                    Inicio
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Competencias */}
            <section className="" id="competencias" style={{ height: "max-content", paddingBottom: "100px" }} >
                <div className="container-fluid px-5">
                    <div className="title2--competencias mt-5">
                        <h3 className="text-center">Clínica Preventiva</h3>
                    </div>
                    <div className="title--competencias d-flex justify-content-center">
                        <h1 className="text-center">Pilares de competencia<span className="color--punto">.</span>
                        </h1>
                    </div>
                    <div className="body--competencias" style={{ marginTop: "50px" }}>
                        <Pilares2 />
                    </div>
                </div>
            </section>

            {/* Section Quienes Somos */}
            <section ref={welcomeRef} className="position-relative" id="welcome" >
                {
                    <AnimatePresence>
                        {
                            isVisibleBackground && (
                                <div
                                    // initial={{
                                    //     y: -100,
                                    //     opacity: 0
                                    // }}
                                    // animate={{
                                    //     y: 0,
                                    //     opacity: 1
                                    // }}
                                    // transition={{
                                    //     ease: "linear",
                                    //     duration: 0.5,
                                    // }}
                                    className="video_welcome bg-welcome">
                                    {/* <div class="bg-welcome">
                                        <video playsinline autoplay muted loop poster="...">
                                            <source src="assets/img/laboratorio/lab_presentation_gif.mp4" type="video/mp4" />
                                        </video>
                                    </div> */}
                                </div>
                            )
                        }
                    </AnimatePresence>

                }
                <div className="container-fluid h-100 px-5 welcome--body">
                    <div className="row p-5 my-auto h-100">
                        <div className="d-none d-xl-block col-12 col-xxl-6 col-xl-6" style={{ marginTop: "74px" }}>
                            <ObserveComponent repeat={0}>
                                {
                                    isVisible => (
                                        <AnimatePresence>
                                            {
                                                isVisible && (
                                                    <div className="img-container  ">
                                                        <motion.div
                                                            initial={{ y: -100, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            // exit={{ y: 100, opacity: 0 }}        
                                                            transition={{
                                                                ease: "linear",
                                                                duration: 0.8,
                                                            }}>
                                                            <img class="img-fluid shadow" src="assets/img/laboratorio/laboratorio3.webp" alt="" style={{ top: "47vh", zIndex: "40", width: "40vh !important" }}></img>

                                                        </motion.div>


                                                        <motion.div
                                                            initial={{ x: -100, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            // exit={{ x: -100, opacity: 0 }}       
                                                            transition={{
                                                                ease: "linear",
                                                                duration: 0.8,
                                                            }}>
                                                            <img class="img-fluid" src="assets/img/laboratorio/laboratorio2.webp" alt="" style={{ bottom: "0px", top: "3vh", width: "49vh", left: "6vh" }} />
                                                        </motion.div>


                                                    </div>
                                                )
                                            }
                                        </AnimatePresence>
                                    )
                                }
                            </ObserveComponent>
                        </div>
                        <Presentacion />
                    </div>
                </div>
            </section>

            {/* Section Testimonios */}
            {/* <section className=" d-flex " id="testimony" >
                <div className="bg-testimony"></div>
                <div className="container-fluid position-relative h-100  d-flex justify-content-center" style={{ padding: "0px 200px" }}>
                    <motion.div className='align-self-center'>
                        <motion.div
                            initial={{
                                x: 100,
                                opacity: 0
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                ease: "linear",
                                duration: 0.5,
                            }}
                            layout
                            className="title--testimoy">
                            <h1 className="text-center ">Testimonios</h1>
                        </motion.div>

                        <motion.div className="body--testimony w-100  "    >
                            <SliderTestimony />
                        </motion.div>
                    </motion.div>
                </div>
            </section > */}

        </div>
    )
}

export default Home

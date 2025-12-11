import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'

const SliderTestimony = () => {
    const sliderItemsRef = useRef([])
    const [value, setValue] = useState(1)

    // Iniciar el intervalo al montar el componente
    useEffect(() => {

        const autoInterval = setInterval(() => {
            document.getElementById('next').click();; // Cambia al siguiente testimonio automáticamente
        }, 9000); // Cambia cada 5 segundos

        // Limpia el intervalo cuando el componente se desmonte
        return () => clearInterval(autoInterval);
    }, []); // No necesita depender de nada, ya que solo se ejecuta una vez al montar



    const changePosition = (add) => () => {
        const sliders = document.querySelectorAll('.slider--item');

        sliders[value - 1].classList.remove('slider--item--show');

        let newValue = value + add;

        if (newValue > sliders.length) {
            newValue = 1;
        } else if (newValue < 1) {
            newValue = sliders.length;
        }

        sliders[newValue - 1].classList.add('slider--item--show');
        setValue(newValue);
    };

    return (
        <>
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                layout
                transition={{
                    ease: "linear",
                    duration: 0.5,
                }}
                className="testimony--slider w-100 ">
                <div onClick={changePosition(-1)} className="arrow-back" id='before' style={{ fontSize: "30px" }}>
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div ref={el => (sliderItemsRef.current[0] = el)} className="slider--item slider--item--show" data-id='1'>
                    <div className="testimony--text">
                        <div className='mb-5'>
                            <p className='text-center text-dark'>"Mi experiencia en la Clínica BIMO fue excelente. El proceso de toma de muestras fue rápido y sin problemas. El personal fue amable y profesional, y me explicaron cada paso del check-up médico con paciencia. Me sentí tranquilo y bien atendido durante toda la visita. Recomiendo encarecidamente sus servicios a cualquiera que necesite análisis clínicos y revisión médica."</p>
                        </div>
                        <div className=''>
                            <p className='text-center fw-bold text-pantone-2 p-0 m-0'>Paciente</p>
                            <p className='text-center p-0 m-0'>Juan Daniel</p>
                        </div>
                    </div>
                    <figure className='testimony--picture'>

                    </figure>
                </div>
                <div ref={el => (sliderItemsRef.current[1] = el)} className="slider--item" data-id='2'>
                    <div className="testimony--text">
                        <div className='mb-5'>
                            <p className='text-center text-dark'>"Acudí a la Clínica BIMO para un check-up de rutina y quedé impresionado. La facilidad con la que pude programar una cita fue genial, y cuando llegué, no tuve que esperar mucho. Las instalaciones estaban limpias y modernas. El personal que realizó la toma de muestras fue profesional y habilidoso; apenas sentí molestias. Los resultados estuvieron disponibles en poco tiempo y me explicaron detalladamente los hallazgos durante mi consulta de seguimiento. ¡Una experiencia de atención médica realmente sobresaliente!"</p>
                        </div>
                        <div className=''>
                            <p className='text-center fw-bold text-pantone-2 p-0 m-0'>Paciente</p>
                            <p className='text-center p-0 m-0'>Angel Perez</p>
                        </div>
                    </div>
                    <figure className='testimony--picture'>

                    </figure>
                </div>
                <div ref={el => (sliderItemsRef.current[2] = el)} className="slider--item" data-id='3'>
                    <div className="testimony--text">
                        <div className='mb-5'>
                            <p className='text-center text-dark'>"Después de buscar una clínica confiable para mi check-up anual, encontré la Clínica BIMO. El equipo allí fue muy eficiente en la toma de muestras, lo que me ayudó a superar cualquier ansiedad que tenía. Durante el check-up, el médico fue detallado en su evaluación y me proporcionó consejos útiles para mejorar mi bienestar general. Aprecio mucho el enfoque integral de la atención que ofrecen. Sin duda, regresaré el próximo año."</p>
                        </div>
                        <div className=''>
                            <p className='text-center fw-bold text-pantone-2 p-0 m-0'>Paciente</p>
                            <p className='text-center p-0 m-0'>Edgar Cano</p>
                        </div>
                    </div>
                    <figure className='testimony--picture'>

                    </figure>
                </div>
                <div onClick={changePosition(1)} className="arrow-next" id='next' style={{ fontSize: "30px" }}>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </motion.div>
        </>
    )
}


export default SliderTestimony
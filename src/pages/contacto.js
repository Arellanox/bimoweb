import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import YourComponent from '../components/prueba_frame_motion'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Loader from '../components/loader';

// import $ from 'jquery';
import axios from 'axios';


const Contacto = () => {

    const [selectedId, setSelectedId] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden';
    //     setTimeout(() => {
    //         setIsLoading(false);
    //         document.body.style.overflow = 'auto';
    //     }, 2000);
    // }, [])


    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }, [])
    // $(document).on('submit',)

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        asunto: '',
        comentario_ayuda: '',
        politica: false,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'politica' ? event.target.checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Toast.success()

        axios.post('https://bimo-lab.com/nuevo_checkup/api/contacto_web_api.php', formData)
            .then((response) => {
                console.log(response);
                alert(response.data.message)
                // Aquí maneja la respuesta de la API.
                // Por ejemplo: mostrar una alerta de éxito o redirigir al usuario.
            })
            .catch((error) => {
                console.error('Hubo un error al enviar el formulario:', error);
                // Aquí maneja el error. Por ejemplo: mostrar una alerta de error.
                alert("Error: " + error)
            });
    };


    return (
        <>
            {/* Titulo de la pagina */}
            <title>BIMO | Contacto y Ubicación</title>
            {/* Loader */}
            {/* {isLoading && <Loader />} */}
            {/* Seccion Hero de la pagina */}
            <div className="bg-cover-page bg-ciencia-vida">
                <div className='text-container'>
                    <h2 className='text-center text-light display-5'>Contacto</h2>
                    <h3 className='text-center text-pantone' style={{
                        fontSize: "1.25rem"
                    }}>Ubicación / Contacto   </h3>
                </div>
            </div>
            {/* Contenido de la paginas */}
            <section className='' id='contacto' style={{ height: "max-content" }}>
                <div className="container-fluid px-5 my-5">
                    {/* Fila de contacto, Formulario para enviar informacion del usuario solicitando contacto */}
                    <div className="row" style={{ marginBottom: "100px" }}>
                        {/* Cartas de informacion */}
                        <div className="col-12 col-xxl mb-5">
                            <p className='text-p fw-bold'>
                                <i class="bi bi-send-fill me-2"></i>
                                Contáctanos
                            </p>
                            <div className="row gap-5 gap-xxl-4">
                                <motion.div
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    className="col-12 col-xxl info--cards card shadow-sm rounded-2 border-0">
                                    <motion.div
                                        className='
                                        p-3'>
                                        <div className='    
                                        text-light
                                        rounded-pill
                                        shadow-sm
                                        bg-primary
                                        ' style={{
                                                width: "max-content"
                                            }}>
                                            <i style={{
                                                fontSize: "3rem",
                                                padding: "15px"
                                            }} class="bi bi-headset overflow-hidden "></i>
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='
                                            fw-bold
                                            text-pantone-2
                                            '>Número de contacto</h5>
                                            <a href='https://bit.ly/3Kx3DdL' target='_blank' className='text-p m-0'><i class="bi bi-whatsapp me-2"></i>+52 1 993 215 4479</a >
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    className="col-12 col-xxl info--cards card shadow-sm rounded-2 border-0">
                                    <motion.div
                                        className='
                                        p-3'>
                                        <div className='    
                                        text-light
                                        rounded-pill
                                        shadow-sm
                                        bg-pantone
                                        ' style={{
                                                width: "max-content"
                                            }}>
                                            <i class="bi bi-envelope"
                                                style={{
                                                    fontSize: "3rem",
                                                    padding: "15px"
                                                }}
                                            ></i>
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='
                                            fw-bold
                                            text-pantone-2
                                            '>Correo</h5>
                                            <p className='text-p m-0'>hola@bimo.com.mx <br /></p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    className="col-12 col-xxl info--cards card shadow-sm rounded-2 border-0">
                                    <motion.div
                                        className='
                                        p-3'>
                                        <div className='    
                                        text-light
                                        rounded-pill
                                        shadow-sm
                                        bg-pantone-3
                                        ' style={{
                                                width: "max-content"
                                            }}>
                                            <i class="bi bi-geo-alt"
                                                style={{
                                                    fontSize: "3rem",
                                                    padding: "15px"
                                                }}
                                            ></i>
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='
                                            fw-bold
                                            text-pantone-2
                                            '>Ubicación</h5>
                                            <p className='text-p m-0'>Avenida José Pages Llergo, Núm. 150, Colonia Arboledas</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                        {/* Formulario para enviar informacion del usuario */}
                        <form className="col-12 col-xl-12 col-xxl-6" id="formContacto" onSubmit={handleSubmit}>
                            <p className='text-p fw-bold'>
                                <i className="bi bi-send-fill me-2"></i>
                                Agenda una cita
                            </p>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className='mb-3 '>
                                        {/* Nombre */}
                                        <input
                                            type="text"
                                            className='form-control rounded-0'
                                            placeholder='Nombre*'
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className='mb-3 '>
                                        {/* Telefono */}
                                        <input
                                            type="text"
                                            className='form-control rounded-0'
                                            placeholder='Teléfono'
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className='mb-3'>
                                        {/* Email */}
                                        <input
                                            type="text"
                                            className='form-control rounded-0'
                                            placeholder='Email'
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className='mb-3 '>
                                        {/* Asunto */}
                                        <input
                                            type="text"
                                            className='form-control rounded-0'
                                            placeholder='Asunto'
                                            name="asunto"
                                            value={formData.asunto}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <textarea
                                        className='form-control rounded-0'
                                        required
                                        placeholder='¿Cómo podemos ayudarte?'
                                        name="comentario_ayuda"
                                        value={formData.comentario_ayuda}
                                        onChange={handleInputChange}
                                        cols="30"
                                        rows="5"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-check my-4">
                                <label className="form-check-label">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="politica"
                                        checked={formData.politica}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    Estoy de acuerdo con la "Política de Privacidad".
                                </label>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary fw-bold p-3'
                                style={{
                                    fontSize: "13px",
                                    letterSpacing: "1px"
                                }}
                            >
                                ENVIAR MENSAJE
                            </button>
                        </form>
                    </div>
                    {/* Fila de ubicación geografica y imagen de referencia */}
                    <div className="row" >
                        <p className='text-p fw-bold'>
                            <i class="bi bi-geo-alt-fill"></i>
                            Ubicación
                        </p>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className='col-12 col-xl-6 col-xxl-6 p-2 d-flex align-content-center'>
                            <img src="assets/img/instalaciones/vista_exterior.jpg" className='img-fluid rounded-5 shadow' alt="" />
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="col-12 col-xl-6 col-xxl-6 p-2">
                            <div className='text-center d-flex mx-auto justify-content-center text-pantone-2'>
                                <p>
                                    <i class="bi bi-geo-alt-fill"></i>
                                    Avenida José Pages Llergo, Núm. 150,
                                    Colonia Arboledas, Código Postal: 86079,
                                    Villahermosa, Centro, Tabasco.
                                    Cel. 9932154479
                                </p>
                            </div>
                            <iframe
                                className='rounded-5 shadow'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15178.14102460709!2d-92.9459937128418!3d18.000346499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd91aeccf839b%3A0x744a305b0d058aaa!2sBIMO!5e0!3m2!1ses-419!2smx!4v1693418929994!5m2!1ses-419!2smx&t=k"
                                width="100%"
                                height="600"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="eager"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </motion.div>
                    </div>

                    
                </div>
            </section >
        </>
    )
}

export default Contacto 

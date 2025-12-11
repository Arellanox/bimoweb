import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quiero_radiografia = () => {


    const [formData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        api: 1,
        id_area: 8
    });

    // submit de formulario de landing
    const handleSubmit = (event) => {
        event.preventDefault();

        // Toast.success()

        axios.post('https://bimo-lab.com/nuevo_checkup/api/landings_api.php', formData)
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
            <title>BIMO | Política de Privacidad </title>
            {/* Loader */}
            {/* {isLoading && <Loader />} */}
            {/* Seccion Hero de la pagina */}
            <div className="bg-cover-page bg-serotonina">
                <div className='text-container'>
                    <h2 className='text-center text-light display-5'>¿Necesitas una radiografía?</h2>
                    <h3 className='text-center text-pantone' style={{
                        fontSize: "1.25rem"
                    }}>Con equipos de alta resolución</h3>
                </div>
            </div>
            {/* Contenido de la paginas */}
            <section className='p-3'>
                <div className="container py-5">
                    <p className="text-center text-uppercase" style={{
                        color: "red"
                    }}>Promoción del mes</p>
                    <h1 className='text-center text-uppercase mb-5 fw-bold text-pantone-2'>
                        Radiografía
                        <span style={{
                            color: "red"
                        }}>$250.00 </span>
                        <span style={{
                            fontSize: "15px"
                        }}> pesos (una sola región.)</span>
                    </h1>

                    <div className="row">
                        <div className="col-12 col-md-6 text-center">
                            <p>Nuestros estudios especializados son interpretados por médicos especialistas.</p>
                            <img src="assets/img/landing/radiografia_250-03_04_2024.webp" className="img-fluid shadow-sm rounded-3" alt="" />
                        </div>
                        
                        <div className="col-12 col-md-6 ">
                            <div className='text-center'>
                                <p>Nuestros estudios especializados son interpretados por médicos especialistas.</p>
                            </div>
                            <form className="px-4" id="formContacto" onSubmit={handleSubmit}>
                                <p className='text-p fw-bold'>
                                    <i className="bi bi-send-fill me-2"></i>
                                    Estudio de rayos x con promoción (Agenda tu cita)
                                </p>
                                <div className="row">
                                    <div className='mb-3 '>
                                        {/* Nombred completo del paciente */}
                                        <label style={{ color: "rgb(000, 078, 89)" }} className='pb-2'>Nombre completo*</label>
                                        <input
                                            type="text"
                                            className='form-control rounded-0'
                                            placeholder='Nombre y apellidos'
                                            name="nombre"
                                            value={formData.nombre}
                                            required
                                            style={{height: '50px'}}
                                        />
                                    </div>
                                    <div className='mb-3 '>
                                        {/* Telefono */}
                                        <label style={{ color: "rgb(000, 078, 89)" }} className='pb-2'>Número de teléfono de contacto*</label>
                                        <input
                                            type="number"
                                            className='form-control rounded-0'
                                            placeholder='Contacto vía WhatsApp'
                                            name="telefono"
                                            value={formData.telefono}
                                            required
                                            style={{height: '50px'}}
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        {/* Email */}
                                        <label style={{ color: "rgb(000, 078, 89)" }} className='pb-2'>Correo Electronico de contacto*</label>
                                        <input
                                            type="email"
                                            className='form-control rounded-0'
                                            placeholder='Correo'
                                            name="email"
                                            value={formData.email}
                                            required
                                            style={{height: '50px'}}
                                        />
                                    </div>
                                </div>
 
                                <div className='text-end'>
                                    <button
                                    type='submit'
                                    className='btn btn-primary fw-bold p-3'
                                    style={{
                                        fontSize: "13px",
                                        letterSpacing: "1px"
                                    }}>
                                    ENVIAR
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}


export default Quiero_radiografia
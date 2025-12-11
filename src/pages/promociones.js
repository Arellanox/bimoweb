import Loader from '../components/loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Promociones = () => {
    const [promociones, setPromociones] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        getPromociones();
    }, [])

    const getPromociones = async () => {
        try {
            const formData = new FormData();
            formData.append('api', 2);

            axios.post('https://bimo-lab.com/nuevo_checkup/api/promociones_api.php', formData).then((response) => {
                setPromociones(response.data.response.data);
                console.log(response.data.response.data);
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

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
                        Nuestras Promociones
                    </h2>
                    <h3 className='text-center text-pantone' style={{
                        fontSize: "1.25rem"
                    }}>Conoce las promociones que tenemos para ti <span style={{ color: "#ff0808ff" }}>*</span> </h3>

                </div>
            </div>
            <section>
                <div className="container px-0 px-lg-5 my-5">
                    {promociones.length > 0 ? (
                        <div id="carouselPromociones" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner px-3">
                                {Array.from({ length: Math.ceil(promociones.length / 3) }).map((_, index) => (
                                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                        <div className="row justify-content-center">
                                            {promociones.slice(index * 3, index * 3 + 3).map((promocion, idx) => (
                                                <div className="col-12 col-md-6 col-lg-4 mb-4" key={promocion.ID_PROMOCION || idx}>
                                                    <div className="card h-100 shadow rounded-3 border-0 overflow-hidden">
                                                        <div style={{ height: "250px", overflow: "hidden", position: "relative" }}>
                                                            <img
                                                                src={promocion.ARCHIVOS?.[0]?.url}
                                                                className="card-img-top w-100 h-100"
                                                                alt={promocion.TITULO}
                                                                style={{ objectFit: "cover", transition: "transform 0.3s ease", cursor: "pointer" }}
                                                                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                                                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                                                                onClick={() => setSelectedImage(promocion.ARCHIVOS?.[0]?.url)}
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#promoModal"
                                                            />
                                                            <div className="position-absolute top-0 end-0 bg-danger text-white px-3 py-1 rounded-start mt-3 fw-bold">
                                                                Promo
                                                            </div>
                                                        </div>
                                                        <div className="card-body d-flex flex-column bg-light">
                                                            <h5 className="card-title fw-bold text-dark mb-3 text-truncate" title={promocion.TITULO}>{promocion.TITULO}</h5>
                                                            <p className="card-text text-secondary small flex-grow-1" style={{ display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                                                {promocion.DESCRIPCION}
                                                            </p>
                                                            <div className="mt-3 pt-3 border-top d-flex justify-content-between align-items-center">
                                                                <small className="text-muted">
                                                                    <i className="bi bi-calendar-event me-1"></i>
                                                                    Válido hasta: <span className="fw-bold">{promocion.FECHA_FIN}</span>
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselPromociones" data-bs-slide="prev" style={{ width: "5%", left: "-5%" }}>
                                <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true" style={{ backgroundSize: "50%" }}></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselPromociones" data-bs-slide="next" style={{ width: "5%", right: "-5%" }}>
                                <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true" style={{ backgroundSize: "50%" }}></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                    )}
                </div>

                <p className="text-center"><span className="text-pantone">*</span> Las promociones son temporales y pueden ser modificadas sin previo aviso.</p>

                {/* Modal para ver imagen */}
                <div className="modal fade" id="promoModal" tabIndex="-1" aria-labelledby="promoModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-transparent border-0">
                            <div className="modal-header border-0">
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center">
                                {selectedImage && (
                                    <img src={selectedImage} className="img-fluid rounded shadow" alt="Promoción Grande" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Promociones
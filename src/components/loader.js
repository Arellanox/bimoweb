import React, { Suspense } from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { Interactive } from 'react-interactive'
import { useRef } from 'react'
import { Dna } from 'react-loader-spinner'
import { PropagateLoader } from 'react-spinners'


const Loader = () => {
    return (
        <div
            style={{
                position: "relative",
                zIndex: "200"

            }}>
            <PropagateLoader color="#ffaf1e" size={20} cssOverride={{
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
                height: "100vh",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(000, 078, 89)"
            }} >
            </PropagateLoader>
            <div className="img-container">
                <img src="assets/img/logo_blanco_sinfondo.png" style={{
                    width: "18vh",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "41vh"
                }} className='img-fluid  img--loader mx-auto' alt="" />
            </div>

        </div>
    )
}


export default Loader
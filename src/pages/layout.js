import React, { Suspense, useEffect } from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Loader from '../components/loader'
import { useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.dataLayer.push({
            event: "page_view"
        });
    }, [location]);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout

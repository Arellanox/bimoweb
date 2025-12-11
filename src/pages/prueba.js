import React, { useEffect, useState } from 'react';
import { Element, Link, animateScroll as scroll } from 'react-scroll';
// import '../../public/assets/css/prueba.css'; // Asegúrate de tener un archivo CSS donde puedas definir estilos personalizados.

function Prueba() {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    useEffect(() => {
        // Detectar el scroll de la rueda del ratón para cambiar de sección
        const handleScroll = (event) => {
            if (event.deltaY > 0) {
                // Hacia abajo
                scrollNextSection();
            } else {
                // Hacia arriba
                scrollPrevSection();
            }
        };

        window.addEventListener('wheel', handleScroll);

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    const scrollNextSection = () => {
        if (currentSectionIndex < 2) {
            setCurrentSectionIndex(currentSectionIndex + 1);
            scrollToSection(currentSectionIndex + 1);
        }
    };

    const scrollPrevSection = () => {
        if (currentSectionIndex > 0) {
            setCurrentSectionIndex(currentSectionIndex - 1);
            scrollToSection(currentSectionIndex - 1);
        }
    };

    const scrollToSection = (index) => {
        const sections = document.querySelectorAll(".section");
        const section = sections[index];

        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="App">
            <nav>
                <ul>
                    <li onClick={scrollPrevSection}>Sección Anterior</li>
                    <li onClick={scrollNextSection}>Siguiente Sección</li>
                </ul>
            </nav>
            <section className="border section">
                <h1>Sección 1</h1>
            </section>
            <section className="border section">
                <h1>Sección 2</h1>
            </section>
            <section className="border section">
                <h1>Sección 3</h1>
            </section>
        </div>
    );
}

export default Prueba;

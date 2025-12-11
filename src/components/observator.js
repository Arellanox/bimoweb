import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function ObserveComponent({ children, navbarHeight, style, repeat = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        rootMargin: ``, // Ajustar según la altura del navbar
    });

    // Actualiza el estado isVisible cuando cambia el valor de inView
    if (inView !== isVisible && repeat) {
        setIsVisible(inView);
    }

    useEffect(() => {
        if (inView && !isVisible) { // Realiza la animación si es visible y aún no se ha realizado
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div ref={ref} className={style}>
            {typeof children === 'function' && children(isVisible)}
        </div>
    );
}

export default ObserveComponent
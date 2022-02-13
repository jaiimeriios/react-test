import { useEffect, useRef, useCallback } from 'react';

// Styled Components
import {
    ContenedorPricipal,
    ContenedorSlideshow,
    Controles,
    Boton,
} from './componentsStyled';

import { ReactComponent as ArrowLeft } from '../../assets/slideshow/left.svg';
import { ReactComponent as ArrowRight } from '../../assets/slideshow/right.svg';

const Slider = ({
    children, // children gets content inside component
    controles = true,
    autoplay = false,
    velocidad = '300',
    intervalo = '5000',
}) => {
    const slider = useRef(null);
    const intervaloSlider = useRef(null);

    const siguiente = useCallback(() => {
        if (slider.current.children.length > 0) {
            const current = slider.current;
            const primerElemento = current.children[0];

            const imgSize = current.children[0].offsetWidth;
            current.style.transform = `translateX(-${imgSize}px)`;
            current.style.transition = `all ${velocidad}ms ease-out`;

            const transition = () => {
                current.style.transition = 'none';
                current.style.transform = `translateX(0)`;
                current.appendChild(primerElemento);
                current.removeEventListener('transitionend', transition);
            };

            current.addEventListener('transitionend', transition);
        }
    }, [velocidad]);

    const anterior = () => {
        if (slider.current.children.length > 0) {
            const current = slider.current;
            const totalItems = current.children.length - 1;
            const ultimoElement = current.children[totalItems];

            current.insertBefore(ultimoElement, current.firstChild);

            current.style.transition = 'none';

            const imgSize = current.children[0].offsetWidth;
            current.style.transform = `translateX(-${imgSize}px)`;

            setTimeout(() => {
                current.style.transition = `all ${velocidad}ms ease-out`;
                current.style.transform = `translateX(0)`;
            }, 50);
        }
    };

    useEffect(() => {
        if (autoplay) {
            intervaloSlider.current = setInterval(() => {
                siguiente();
            }, intervalo);

            slider.current.addEventListener('mouseenter', () => {
                clearInterval(intervaloSlider.current);
            });

            slider.current.addEventListener('mouseleave', () => {
                intervaloSlider.current = setInterval(() => {
                    siguiente();
                }, intervalo);
            });
        }
    }, [autoplay, intervalo, siguiente]);

    return (
        <ContenedorPricipal>
            <ContenedorSlideshow ref={slider}>{children}</ContenedorSlideshow>

            {controles && (
                <Controles>
                    <Boton onClick={anterior}>
                        <ArrowLeft />
                    </Boton>
                    <Boton onClick={siguiente}>
                        <ArrowRight />
                    </Boton>
                </Controles>
            )}
        </ContenedorPricipal>
    );
};

export default Slider;

import Slider from './Slider';

// Styled Components
import {
    Section,
    Titulo,
    Slide,
    TextoSlide
} from './componentsStyled';

// imgs
import imgUno from './../../assets/slideshow/1.jpg';
import imgDos from './../../assets/slideshow/2.jpg';
import imgTres from './../../assets/slideshow/3.jpg';
import imgCuatro from './../../assets/slideshow/4.jpg';

const Slideshow = () => {
    return (
        <div className="container">
            <h2>Slideshow</h2>

            <Section>
                <Titulo>Destacados</Titulo>
                <Slider controles={true} autoplay={false} velocidad="500" intervalo="1000">
                    <Slide>
                        <a href="/slideshow">
                            <img src={imgUno} alt="" />
                        </a>
                        <TextoSlide colorFondo="#a73737" colorTexto="#fbcbcb">
                            <p>Lorem Impsum Dolor</p>
                        </TextoSlide>
                    </Slide>
                    <Slide>
                        <a href="/slideshow">
                            <img src={imgDos} alt="" />
                        </a>
                        <TextoSlide>
                            <p>Lorem Impsum</p>
                        </TextoSlide>
                    </Slide>
                    <Slide>
                        <a href="/slideshow">
                            <img src={imgTres} alt="" />
                        </a>
                        <TextoSlide>
                            <p>Lorem Impsum</p>
                        </TextoSlide>
                    </Slide>
                    <Slide>
                        <a href="/slideshow">
                            <img src={imgCuatro} alt="" />
                        </a>
                        <TextoSlide>
                            <p>Lorem Impsum</p>
                        </TextoSlide>
                    </Slide>
                </Slider>
            </Section>



            <Section >
                <Titulo>AutoPlay</Titulo>
                <Slider controles={false} autoplay={true} velocidad="800" intervalo="2000">
                    <Slide>
                        <a href="/slideshow">
                            <img src={imgUno} alt="" />
                        </a>
                        <TextoSlide colorFondo="#a73737" colorTexto="#fbcbcb">
                            <p>Lorem Impsum Dolor</p>
                        </TextoSlide>
                    </Slide>
                    <Slide>
                        <a href="/slideshow">
                            <img src={imgDos} alt="" />
                        </a>
                        <TextoSlide>
                            <p>Lorem Impsum</p>
                        </TextoSlide>
                    </Slide>
                    <Slide>
                        <a href="/slideshow">
                            <img src={imgTres} alt="" />
                        </a>
                        <TextoSlide>
                            <p>Lorem Impsum</p>
                        </TextoSlide>
                    </Slide>
                    <Slide>
                        <a href="/slideshow">
                            <img src={imgCuatro} alt="" />
                        </a>
                        <TextoSlide>
                            <p>Lorem Impsum</p>
                        </TextoSlide>
                    </Slide>
                </Slider>
            </Section>
        </div>
    );
};

export default Slideshow;

import styled from 'styled-components';


const Section = styled.section`
    margin: 2rem 0;
`;

const Titulo = styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 15px;
    color: ${props => props.tituloEstado ? '#ddc271' : '#cdd8e1'};
`;

const ContenedorPricipal = styled.div`
    position: relative;
    overflow: hidden;
`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: all 300ms ease;
    z-index: 2;
    max-height: 300px;
    position: relative;

    img {
        width: 100%;
        height: auto;
        vertical-align: top;
    }
`;

const TextoSlide = styled.div`
    width: 100%;
    padding: 0.5rem 0;
    text-align: center;
    position: absolute;
    z-index: 3;
    bottom: 0;

    background-color: ${(props) =>
        props.colorFondo ? props.colorFondo : 'rgba(0, 0, 0, .35)'};

    p {
        color: ${(props) => (props.colorTexto ? props.colorTexto : '#fff')};
    }

    @media screen and (max-width: 600px) {
        position: relative;
    }
`;

const Controles = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
`;

const Boton = styled.button`
    background-color: rgba(0, 0, 0, 0.05);
    border: none;
    padding: 0 0.25rem;
    pointer-events: auto;
    cursor: pointer;
    transition: all 300ms ease;

    path {
        fill: #bd9f45;
    }

    :hover {
        background-color: rgb(6 53 84 / 85%);
        path {
            fill: #ff9800;
        }
    }
`;

export {
    Section,
    Titulo,
    ContenedorPricipal,
    ContenedorSlideshow,
    Slide,
    TextoSlide,
    Controles,
    Boton,
};

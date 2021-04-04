import React, {useState, useRef, useEffect} from 'react'
import styled, {css} from 'styled-components/macro';
import {Button} from '../../../Css/globalStyle';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

// Properties for Hero Slider
const HeroSliderSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroSliderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSliders = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: felc;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 10vch;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0ded, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2) 100%)
    }
`;

const HeroSliderImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroSliderContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;
    text-align: left;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

const ArrowButton = css`
    width: 50px;
    height: 50px;
    color: #fff;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;
    
    &:hover {
        background: #cd853f;
        transform: scale()1.05        
    };
`;

const ForwardArrow = styled(IoArrowForward)`
    ${ArrowButton}
`;

const BackwardArrow = styled(IoArrowBack)`
    ${ArrowButton}
`;


// properties for carousel slider
const CarouselSliderSection = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Image = styled.img`
    width: 1000px;
    height: 600px;
    border-radius: 10px;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.4);
`;

const NextArrow = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 15rem;
    font-size: 3rem;
    color: #000d1a;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    &:hover {
        color: #cd853f;
        transform: scale(1.05)        
    };

    @media screen and (max-width: 1200px) {
        left: 15px;
    }

`;

const PreviousArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 15rem;
    font-size: 3rem;
    color: #000d1a;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    &:hover {
        color: #cd853f;
        transform: scale(1.05)        
    };

    @media screen and (max-width: 1300px) {
        right: 15px;
    }
`;

const Carousel = (props) => {

    const [current, setCurrent] = useState(0)
    const length = props.slides.length
    const timeout = useRef(null)
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000)

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        };
    }, [current, length]
    )

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1 )
    }

    const previousSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1 )
    }

    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }

    let Carousel = null;

    const HeroSlider = (
        <HeroSliderSection>
            <HeroSliderWrapper>
                {props.slides.map((slide, index) => (
                    <HeroSlide key={index}>
                        {index === current && (
                            <HeroSliders>
                                <HeroSliderImage src={slide.image} alt={slide.alt}/>
                                <HeroSliderContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path} primary="true"
                                        css={`
                                            max-width: 160px;
                                        `}
                                    >
                                        {slide.label}
                                        <Arrow />
                                    </Button>
                                </HeroSliderContent>
                            </HeroSliders>
                        )}
                    </HeroSlide>
                ))}
                <SliderButtons>
                    <BackwardArrow onClick={previousSlide}/>
                    <ForwardArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroSliderWrapper>
        </HeroSliderSection>
    )

    const CarouselSlider = (
        <CarouselSliderSection>
            <NextArrow onClick={nextSlide}/>
            <PreviousArrow onClick={previousSlide}/>
            {props.slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slider active' : 'slider'} 
                    key={index}>
                        {index === current && (
                            <Image src={slide.image} alt={slide.alt}/>
                        )}
                    </div>
                ) 
            })}
        </CarouselSliderSection>
    )

    switch (props.sliderType) {
        case ("HeroSlider"):
            Carousel = HeroSlider;
            break;
        case ("CarouselSlider"):
            Carousel = CarouselSlider;
            break;
        default:
            Carousel = HeroSlider;
    }

    return (
        <div>
            {Carousel}
        </div>
    )
}

export default Carousel;

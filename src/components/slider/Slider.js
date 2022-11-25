import { React, useState, useEffect } from 'react'
import "./Slider.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from "./slider-data";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    // declaration of variables for the timing of the change of pictures
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    // the left arrow button click function
    const nextSlide = () => { 
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
    }

    // the right arrow button click function
    const prevSlide = () => { 
        setCurrentSlide(currentSlide === 0 ? slideLength -   1 : currentSlide - 1);
    }

    // the function for the auto slide
    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // useEffect for the content
    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    // useEffect for the picture scroll
    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);
    

  return (
    <div    className='slider'>
        <AiOutlineArrowLeft className="arrow prev"  onClick={prevSlide}/>
        <AiOutlineArrowRight className="arrow next"     onClick={nextSlide}/>


        {sliderData.map((slide, index) => {
            return (
                <div className={ index === currentSlide ? 'slide current' : "slide"} key={index}>
                    {index === currentSlide && (
                        <>
                        <img src={slide.image} alt="slide" />
                        <div className="content">
                            <h2>{slide.heading}</h2>
                            <p>{slide.desc}</p>
                            <hr />
                            <button className='--btn --btn-primary'>Get Started</button>
                        </div>
                        </>
                    )}
                </div>
            )
        })}

    </div>
  )
}

export default Slider
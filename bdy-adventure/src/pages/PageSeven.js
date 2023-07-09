import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import treasure from '../images/treasure.png'
import tinaOne from '../images/tina-one.png'
import tinaTwo from '../images/tina-two.png'
import amyOne from '../images/amy-one.png'
import amyTwo from '../images/amy-two.png'
import tinaAndAmy from '../images/tina-and-amy.png'

const PageSeven = () => {
    const nav = useNavigate();

    const nextPage = () => {
        nav('/PageEight')
    }

    const back = () => {
        nav(-1);
    }

    const parOne = "Once the beast had left the area, Sarah noticed a large treasure chest. As she approached the chest began to tremble and smoke. The lid burst open and a large plume of smoke erupted from inside. As the smoke began to clear two figures began to appear...";
    const parTwo = "Blerg! Man, am I glad to be outta there! Smells like the subway... Oh, Hi Sarah!";
    const parThree = "Hi Sarah! Thanks for the rescue! Wow, I'm starving.  Waffles anyone?";
    const parFour = "Woah, would you look at the time! Hey Amy, we gotta split if we wanna make it in time...";
    const parFive = "Jeez, we gotta get outta here. Hey Sarah, want to come to our event?"
    const parSix = "Great! We'll see you October 14th at the Bass Concert Hall in Austin. C-Ya!!!"

    const imgArr = [treasure, tinaOne, amyOne, tinaTwo, amyTwo, tinaAndAmy];
    const parArr = [parOne, parTwo, parThree, parFour, parFive, parSix];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextButton, setNextButton] = useState(false);

    useEffect(() => {
        const contentInterval = setInterval(() => {
            if (currentIndex === imgArr.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1)
            }

            if (currentIndex === parArr.length - 2 && nextButton === false) {
                setNextButton(true);
            }
        }, 8000);

        return () => clearInterval(contentInterval);
    })

    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={imgArr[currentIndex]} alt="treasure " />
            </div>
            <p className='page-text'>
                {parArr[currentIndex]}
            </p>
            
            <div className='button-wrapper'>
                <button className='begin-button' onClick={back}>
                    Back
                </button>
                {nextButton &&
                    <button className='begin-button' onClick={nextPage}>
                        Next
                    </button>
                }

            </div>
        </div>
    )
}

export default PageSeven

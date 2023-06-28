import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { StateContext } from "../utils/Context";
import path from '../images/path.png'




const PageFour = () => {

    const { shades, setShades, eaten, setEaten } = useContext(StateContext);
    console.log('all dem foos')
    console.log(shades, setShades, eaten, setEaten)


    const nav = useNavigate();

    const back = () => {
        nav(-1);
    }

    const nextBrunch = () => {
        if (!shades) {
            console.log('you dead')
        } else {
            console.log("let's go to eat")
            setEaten(true);
        }
    }

    const nextTome = () => {
        if (!shades) {
            console.log('you dead')
        } else if (!eaten) {
            console.log("you've starved to death")
        } else {
            console.log("let's go to the book store")
        }
    }

    const nextShades = () => {
        console.log('Shades Acquired');
        setShades(true);
        // nav('/AcquireShades')
    }




    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={path} alt="choose your path" />
            </div>
            <div className='page-text'>
                <button className='begin-button' onClick={nextBrunch}>
                    Gather sustenance to sustain you on your journey
                </button>
            </div>
            <div className='page-text'>
                <button className='begin-button' onClick={nextTome}>
                    Gather the ancient tome to ward off insanity while you traverse the void

                </button>
            </div>
            <div className='page-text'>
                {!shades &&
                    <button className='begin-button' onClick={nextShades}>
                        Gather armor to keep your eyes from melting while you stare into the future (It’s so bright)

                    </button>
                }
            </div>
            <div className='button-wrapper'>
                <button className='begin-button' onClick={back}>
                    Back
                </button>
            </div>
        </div>
    )
}

export default PageFour
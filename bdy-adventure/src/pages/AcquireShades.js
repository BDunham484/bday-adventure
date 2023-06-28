import { useContext } from "react";
import { StateContext } from "../utils/Context";
import { useNavigate } from "react-router-dom"
import sunglasses from '../images/shades.png'



const AcquireShades = () => {
    const { shades, setShades, eaten, setEaten } = useContext(StateContext);
    console.log('This is shades state inside the acquire shades page: ' + shades)

    const nav = useNavigate();
    
    const back = () => {
        nav(-1);
    }

    // const nextBrunch = () => {
    //     if (!shades) {
    //         console.log('you dead')
    //     } else {
    //         console.log("let's go to eat")
    //         setEaten(true);
    //     }
    // }

    // const nextTome = () => {
    //     if (!shades) {
    //         console.log('you dead')
    //     } else if (!eaten) {
    //         console.log("you've starved to death")
    //     } else {
    //         console.log("let's go to the book store")
    //     }
    // }

    // const nextShades = () => {
    //     console.log('clicked');
    //     setShades(true);
    // }




    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={sunglasses} alt="choose your path" />
            </div>
            <p className="page-text">
                Azgarothetoth reaches into the flap of his mystical robe and producing a set of eye armor to protect Sarah from the harmful death rays that plagued her path.
            </p>
            <p className="page-text">
                Now that Sarah had her protective wear her and Bob were ready for the next phase of the adventure
            </p>
            {/* <div className='page-text'>
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
            <button className='begin-button' onClick={nextShades}>
            Gather armor to keep your eyes from melting while you stare into the future (It’s so bright)

                </button>
            </div> */}
            <div className='button-wrapper'>
                <button className='begin-button' onClick={back}>
                    Back
                </button>
            </div>
        </div>
    )
}

export default AcquireShades
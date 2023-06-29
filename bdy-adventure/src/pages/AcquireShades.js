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
            <div className='button-wrapper'>
                <button className='begin-button' onClick={back}>
                    Back
                </button>
            </div>
        </div>
    )
}

export default AcquireShades
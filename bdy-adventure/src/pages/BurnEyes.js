import eyeMelt from '../images/eyeMelt.png'
import { useNavigate } from "react-router-dom"


const BurnEyes = () => {

    const nav = useNavigate();

    const back = () => {
        nav(-1);
    }

    return (
        <div>
            <div className='home-wrapper'>
                <div className="main-img-wrapper">
                    <img src={eyeMelt} alt="choose your path" />
                </div>

                <p className='page-text'>
                    You make for the door to start on your way but as soon as you step outside you're met with blinding space lasers from the heavens. They target your eyes and they immediately burst and begin to melt down your face.  If only you'd prepared for your journey...
                </p>

                <div className='button-wrapper'>
                    <button className='begin-button' onClick={back}>
                        Azagthothetoth revives you!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BurnEyes

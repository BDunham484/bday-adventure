import starve from '../images/starve.png'
import { useNavigate } from "react-router-dom"

const Starvation = () => {

    const nav = useNavigate();

    const back = () => {
        nav(-1);
    }


    return (
        <div>
            <div className='home-wrapper'>
                <div className="main-img-wrapper">
                    <img src={starve} alt="choose your path" />
                </div>

                <p className='page-text'>
                    Aaaaaanndd you've starved to death. You gotta eat, dummy.
                </p>

                <div className='button-wrapper'>
                    <button className='begin-button' onClick={back}>
                        Azgarothetoth revives you!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Starvation

import path from '../images/path.png'
import { useNavigate } from "react-router-dom"


const PageFour = () => {

    const nav = useNavigate();

    const nextPage = () => {
        // nav('/PageOne')
        console.log('clicked');
    }

    const back = () => {
        nav(-1);
    }

    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={path} alt="choose your path" />
            </div>
            <p className='page-text'>
            Gather sustenance to sustain you on your journey (Brunch)
            </p>
            <p className='page-text'>
            Gather the ancient tome to ward off insanity while you traverse the void (Bookstore)
            </p>
            <p className='page-text'>
            Gather armor to keep your eyes from melting while you stare into the future (It’s so bright)
            </p>
            <div className='button-wrapper'>
                <button className='begin-button' onClick={back}>
                    Back
                </button>
                <button className='begin-button' onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default PageFour
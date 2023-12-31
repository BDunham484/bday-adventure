import sleep from '../images/sleep.png'
import { useNavigate } from "react-router-dom"


const PageOne = () => {

    const nav = useNavigate();

    const nextPage = () => {
        nav('/PageTwo')
    }

    const back = () => {
        nav(-1);
    }

    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={sleep} alt="Bob arrives" />
            </div>
            <p className='page-text'>
            Once upon a time, on a sunny morning, Sarah woke up to find her loyal companion, Bob, wagging his tail excitedly. Bob seemed eager to tell her something important. As Sarah rubbed the sleep from her eyes, Bob crawled up on her chest and sneezed in her face, as if trying to convey a message. 
            </p>
            <p className='page-text'>
            “Good morning, Best Friend,” Sarah said with a smile. “What’s the big secret you have for me today?”
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

export default PageOne

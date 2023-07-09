import library from '../images/library.png'
import { useNavigate } from "react-router-dom"


const Library = () => {
    const nav = useNavigate();

    const nextPage = () => {
        nav('/PageFive')
        console.log('next page')
    }

    const back = () => {
        nav(-1);
    }
    return (
        <div className='home-wrapper'>
        <div className="main-img-wrapper">
            <img src={library} alt="enter the library" />
        </div>
        <p className='page-text'>
        "The journey before you is long and tedious. One's mind need be protected from nefarious magic as you set forth. Take your time and select the only the right tome to steel your mind"
        </p>
        <p className='page-text'>
        Sarah and Bob stepped forward into an ancient codex depository. Endless rows of books splayed out before them.  "Take your time with your decision. You will know which book to choose as it will speak to you".  At Azgarothetoth's urging, Sarah and Bob began their search...  
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

export default Library

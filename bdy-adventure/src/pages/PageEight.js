import { useNavigate } from "react-router-dom"
import bobAndSarah from '../images/bob-and-sarah.png'


const PageEight = () => {
    const nav = useNavigate();

    const nextPage = () => {
        nav('/')
    }

    const back = () => {
        nav(-1);
    }
    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={bobAndSarah} alt="Bob and Sarah" />
            </div>
            <p className='page-text'>
                Azagthothetoth turns to Sarah and spoke with a grin, "You have completed your quest! Now go forth and enjoy your reward!"
            </p>
            <p className='page-text'>
                With their challenges behind them and Tina and Amy's event in sight, Bob and Sarah took flight and began their long journey together...

                The End
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

export default PageEight

import IMG_3085 from '../images/IMG_3085.png'
import { useNavigate } from "react-router-dom"



const Home = () => {

    let nav = useNavigate();

    const startAdventure = () => {
        nav('/PageOne')
    }

    return (
        <div className="home-wrapper">
            <div className="choose-wrapper">
                <h2 className="choose">Choose Your Own Adventure</h2>
            </div>
            <div className="title-wrapper">
                <h2>
                    YOU'RE THE STAR OF THE STORY!
                </h2>
                <h2>
                    CHOOSE FROM A COUPLE POSSIBLE ENDINGS
                </h2>
                <h1>
                    THE MYSTERY OF THE BIRTHDAY SURPRISE
                </h1>
                <h3>
                    By Brad Dunham
                </h3>
            </div>
            <div className="main-img-wrapper">
                <img src={IMG_3085} alt="girl and her dog" />
            </div>
            <p>
                Illustrations by a robot brain
            </p>
            <button className='begin-button' onClick={startAdventure}>
                Begin Adventure
            </button>

        </div>
    )
}

export default Home

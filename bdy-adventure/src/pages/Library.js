import library from '../images/library.png'
import { useNavigate } from "react-router-dom"


const Library = () => {
    const nav = useNavigate();

    const nextPage = () => {
        // nav('/PageFour')
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
        Curious and intrigued, Sarah knew she had to follow Bob’s lead. She set out on a path that would take her to the dwelling of the wise and mysterious wizard, Azgarothetoth. 
        </p>
        <p className='page-text'>
        “Greetings, Sarah, “ the wizard spoke in a voice filled with wisdom.  “To acquire the treasure you seek, you must prove your mettle.  Join me for a series of tasks that will lead you to glory. Each task will provide you with an item that will advance your quest and make your journey more enjoyable. The tasks that are laid before you are…”
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

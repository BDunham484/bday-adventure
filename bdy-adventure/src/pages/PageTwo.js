import hello from '../images/hello.png'
import { useNavigate } from "react-router-dom"


const PageTwo = () => {

    const nav = useNavigate();

    const nextPage = () => {
        nav('/PageThree')
    }

    const back = () => {
        nav(-1);
    }

    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={hello} alt="Bob arrives" />
            </div>
            <p className='page-text'>
            Bob sneezed in her face again and stuck his tongue in her nose, his eyes shining with excitement. Sarah realized that Bob was trying to guide her on an extraordinary adventure. His tail wagged even faster as he presented her with a note that he had typed.  The note read:
            </p>
            <p className='page-text'>
            “Dear Mummy, an incredible event awaits you, but first, you must embark on a series of quests of epic proportions. Seek the guidance of the mighty wizard and compete the tasks he assigns you. Each task will bring you closer to the final adventure. Trust in the journey, my dear friend.  Your adventure guide, Bob.”
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

export default PageTwo
import { useNavigate } from "react-router-dom"
import wizOrb from '../images/wiz-orb.png'


const PageFive = () => {
    const nav = useNavigate();

    const nextPage = () => {
        nav('/PageSix')
    }

    const back = () => {
        nav(-1);
    }
    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={wizOrb } alt="Wizard speech" />
            </div>
            <p className='page-text'>
                With her tome in hand, Sarah returned to Azgarothetoth. "Before you can begin the journey to your event there is one last challenge you must overcome..."
            </p>
            <p className='page-text'>
                The hosts of your event have been ensnared by a great golden beast that lives in the forest.  The beast is invincible, however. The only chance you have of rescuing your hosts is to distract it. Luckily, I know of just such a distraction. The beast once lost a shining orb that is very dear to her. With the orb in hand, she'll be too distracted by it's presence to take notice of you and your rescue.  I present to you, the orb...
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

export default PageFive

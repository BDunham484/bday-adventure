import eat from '../images/eat.png'
import { useNavigate } from "react-router-dom"


const Brunch = () => {
    const nav = useNavigate();
    
    const back = () => {
        nav(-1);
    }
    return (
        <div className='home-wrapper'>
        <div className="main-img-wrapper">
            <img src={eat} alt="choose your path" />
        </div>
        <p className="page-text">
            Good call! Sarah, Azgarothetoth, and her best friend, Bob, set off to brunch in order to prepare for the long journey ahead.  They feasted until they could feast no more.  Just when Sarah thought she would pop, Azgarothetoth leaned in with a stern look in his eye. 
        </p>
        <p className="page-text">
            {/* "Your journey is not quite done. You still must face the ultimate test in order to acquire the treasure you seek." Her curiosity peaked, Sarah listened closely... */}
            "Now we must prepare our minds, for the road ahead is long and frought with dangers that seek to rip our sanity from our very being. It is knowledge we seek, to strengthen the mind and pass the time!" With a flare and a poof of smoke, the Wizard was in the car with the A/C on.  "It's hot! Let's go!"
        </p>
        <div className='button-wrapper'>
            <button className='begin-button' onClick={back}>
                Back
            </button>
        </div>
    </div>
    )
}

export default Brunch

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import tree from '../images/tree.png'
import mistBeast from '../images/mist-beast.png'
import beastOne from '../images/beast-one.png'
import beastTwo from '../images/beast-two.png'


const PageSix = () => {
    const nav = useNavigate();

    const nextPage = () => {
        // nav('/PageFour')
        console.log('next page')
    }

    const back = () => {
        nav(-1);
    }

    const imgArr = [tree, mistBeast, beastOne, beastTwo];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const imgInterval = setInterval(() => {
            if (currentIndex === imgArr.length -1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex+1)
            }
        }, 5000);

        return () => clearInterval(imgInterval);


    })


    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={imgArr[currentIndex]} alt="Wooden path" />
            </div>
            <p className='page-text'>
                Now that Sarah was fully equipped, she and her best friend, Bob, set forth towards the beasts lair to face their final challenge.
            </p>
            <p className='page-text'>
                After a traversing the forest path a great tree rose before them.  As they approached a purple mist begain to swirl before them and take shape.  From within the mist rose the Golden Beast.  It smelled the air and began to whail in high pitched screech as it sensed the presence of Sarah and Bob. Sarah held forth orb and the Beast's attention shifted towards the bauble. With a grunt Sarah hefted the orb a great distance into the forest. The Beast lunged after the orb without hesitation and dissapered into the forest after it.
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

export default PageSix

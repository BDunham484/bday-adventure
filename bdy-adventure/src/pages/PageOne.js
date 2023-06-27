import hello from '../images/hello.png'

const PageOne = () => {
    return (
        <div className='home-wrapper'>
            <div className="main-img-wrapper">
                <img src={hello} alt="Bob arrives" />
            </div>
            <p className='page-text'>
            Once upon a time, on a sunny morning, Sarah woke up to find her loyal companion, Bob, wagging his tail excitedly. Bob seemed eager to tell her something important. As Sarah rubbed the sleep from her eyes, Bob crawled up on her chest and sneezed in her face, as if trying to convey a message. 

            </p>
            <div className='button-wrapper'>
                <button className='begin-button'>
                    Back
                </button>
                <button className='begin-button'>
                    Next
                </button>
            </div>
        </div>
    )
}

export default PageOne

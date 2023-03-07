import homeBg from '../../assets/homeBg.png'
import './greeting.styles.css';

const Greeting = () => {
    return (
        <div className='greeting-container' style={{ backgroundImage: `url(${homeBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover' }}>
            <h1>hello</h1>
        </div>
    );
}

export default Greeting;

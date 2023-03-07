import homeBg from '../../assets/homeBg.png'
import './home.styles.css';

const Home = () => {
    return (
        <section className='home-container' style={{ backgroundImage: `url(${homeBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover' }}>
            <div>
                <h1>test</h1>
                <h2>logo</h2>
            </div>
        </section>
    );
}

export default Home;

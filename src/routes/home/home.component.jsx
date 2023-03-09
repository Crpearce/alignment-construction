import Greeting from '../../components/greeting/greeting.component';
import Reasons from '../../components/reasons/reasons.component';
import WorkTypes from '../../components/workTypes/workTypes.component';
import './home.styles.css';

const Home = () => {
    return (
        <section className='home-container'>
            <Greeting />
            <WorkTypes />
            <Reasons />
        </section>
    );
}

export default Home;

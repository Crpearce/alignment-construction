import Concrete from '../../components/concrete/concrete.component';
import Greeting from '../../components/greeting/greeting.component';
import Reasons from '../../components/reasons/reasons.component';
import WorkTypes from '../../components/workTypes/workTypes.component';
import './home.styles.css';

const Home = ({ justification }) => {
    return (
        <section className='home-container'>
            <Greeting />
            <WorkTypes />
            <Reasons reasons={justification}/>
            <Concrete />
        </section>
    );
}

export default Home;

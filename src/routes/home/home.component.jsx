import Concrete from '../../components/concrete/concrete.component';
import Greeting from '../../components/greeting/greeting.component';
import Reasons from '../../components/reasons/reasons.component';
import WorkTypes from '../../components/workTypes/workTypes.component';
import Projects from '../../components/projects/projects.component';
import Transform from '../../components/transform/transform.component';
import Hours from '../../components/hours/hours.component';
import Footer from '../../components/footer/footer.component';
import './home.styles.css';

const Home = ({ justification }) => {
    
    return (
        <section className='home-container'>
            <Greeting />
            <WorkTypes />
            <Reasons reasons={justification}/>
            <Projects />
            <Transform />
            <Concrete />
            <Hours />
            <Footer />
        </section>
    );
}

export default Home;

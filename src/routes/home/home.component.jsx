import Greeting from '../../components/greeting/greeting.component';
import Reasons from '../../components/reasons/reasons.component';
import WorkTypes from '../../components/workTypes/workTypes.component';
import Projects from '../../components/projects/projects.component';
import Transform from '../../components/transform/transform.component';
import ConcreteServices from '../../components/concreteServices/concreteServices.component';
import Hours from '../../components/hours/hours.component';
import './home.styles.css';
import { useEffect } from 'react';


const Home = ({ justification }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <section className='home-container'>
            <Greeting />
            <Transform />
            <WorkTypes />
            <Reasons reasons={justification}/>
            <Projects />
            <ConcreteServices />
            <Hours />
        </section>
    );
}

export default Home;

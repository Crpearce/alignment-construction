import Hours from "../../components/hours/hours.component";
import Form from "../../components/form/form.component";
import "./contact.styles.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-details-container">
        <h2 className="contact-header">CONTACT US TODAY!</h2>
        <p className="contact-intro">Our team in Littleton, CO has over 15 years of experience. We specialize in structural wall installation, home addition, concrete and remodeling services.</p>
        <span className="contact-today">Call (720)282-1210 or fill out the form below to learn more about our services today.</span>
      </div>
      <div className="contact-form-container">
        <Form  className='form' />
        <Hours className='daily' />
      </div>
    </div>
  );
};

export default Contact;

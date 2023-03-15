import "./form.styles.css";

const Form = () => {
  return (
    <div className="form-wrapper">
      <h2>Email Us</h2>
      <form className="form-container">
        <input
          type="text"
          placeholder="Full Name"
          name="user_name"
          required
        ></input>
        <input
          type="email"
          placeholder="Email address"
          name="user_name"
          required
        ></input>
        <input
          type="tel"
          placeholder="Phone number"
          name="user_number"
          required
        ></input>
        <textarea name="message" cols="30" rows="10"></textarea>
        <button className="send-email-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

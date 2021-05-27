import React, { useState } from "react";
import { db } from "../firebase";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/HeaderDetails";
import Footer from "../component/footer/FooterTwo";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };


  return(
    <React.Fragment>
      <PageHelmet pageTitle='Contact Me' />
      <Header logo="symbol-dark"/>

    <form className="form defaultMargin" onSubmit={handleSubmit}>
      <div className="container">
        <h1 className="form-title">Hey! Tell me all about your project  🤳</h1>
        {/* Name */}
        <div className="bottom-line">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Email */}
        <div className="bottom-line">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/*Message*/}
        <div className="bottom-line">
            <textarea
              placeholder="Message"
              value={message}
              id="text"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
        </div>
        {/* Budget */}
        <div className="budget">
          <h2>Budget (CAD)</h2>
        <div className="budget-group">
          <div className="checkbox_rounded">
            <label>
              <input type="radio" name="budget" value="10-20k"></input>
                <span className="checkbox-box">
                  <span className="checkbox-box-title">
                    <span data-text="5-10k"> 5-10k</span>
                  </span>
                  <span className="checkbox-checked">
                    <span></span>
                  </span>
                </span>
            </label>
          </div>
          <div className="checkbox_rounded">
            <label>
              <input type="radio" name="budget" value="10-20k"></input>
              <span className="checkbox-box">
                  <span className="checkbox-box-title">
                    <span data-text="10-20k"> 10-20k</span>
                  </span>
                  <span className="checkbox-checked">
                    <span></span>
                  </span>
                </span>
            </label>
          </div>
          <div className="checkbox_rounded">
            <label>
              <input type="radio" name="budget" value="10-20k"></input>
              <span className="checkbox-box">
                  <span className="checkbox-box-title">
                    <span data-text="30-40k"> 30-40k</span>
                  </span>
                  <span className="checkbox-checked">
                    <span></span>
                  </span>
                </span>
            </label>
          </div>
          <div className="checkbox_rounded">
            <label>
              <input type="radio" name="budget" value="10-20k"></input>
              <span className="checkbox-box">
                  <span className="checkbox-box-title">
                    <span data-text="40k-50k"> 40k-50k</span>
                  </span>
                  <span className="checkbox-checked">
                    <span></span>
                  </span>
                </span>
            </label>
          </div>
          <div className="checkbox_rounded">
            <label>
              <input type="radio" name="budget" value="10-20k"></input>
              <span className="checkbox-box">
                  <span className="checkbox-box-title">
                    <span data-text="> 50k"> > 50k</span>
                  </span>
                  <span className="checkbox-checked">
                    <span></span>
                  </span>
                </span>
            </label>
          </div>
        </div>
          <div className="submit-button">
            <button type="submit" className="rn-button-style--2 btn-solid">Submit</button>
          </div>
        </div>
      </div>
    </form>
      <Footer />
      </React.Fragment>


  );
};

export default Contact;


import "./contact.css"
import Phone from "../../Images/phone.png"
import Email from "../../Images/email.png"
import Address from "../../Images/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../Context"

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_928vnum', 
            'template_xwz11sx', 
            formRef.current, 
            'user_3TnOi2CEGLfoucQXr0fev')
        .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

    }    

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Hire me to work for you
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={Phone} 
                            alt="" 
                            className="c-icon"
                            />
                            +91-9943 925 975
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={Email} 
                            alt="" 
                            className="c-icon"
                            />
                            chidam269@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                            src={Address} 
                            alt="" 
                            className="c-icon"
                            />
                            No. 7, 6th street, Ammaiyappa Nagar, Vayalur road, Trichy, Tamil Nadu, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>I'm always open to new challenges</b>. Get in touch. 
                        Let's create stunning projects together!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="E-mail" name="user_email" />
                        <textarea  style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                    <div className="s" style={{backgroundColor: darkMode && "#222"}}>
                            {done && "Thank You for your interest :) I'll get back to you soon!"}
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}

export default Contact

import { useState, useRef, useContext, useEffect } from "react"
import emailjs from '@emailjs/browser'
import Nav from "./Nav"
import { ThemeContext } from "../general/ThemeConext"
import resumeImage from "../assets/resume.png"


function Resume() {
  const form = useRef()
  const [inputs, setInputs] = useState({user_name:"", user_email:"", message:""})
  const [sent, setSent]=useState(false)
  const {setLocation} = useContext(ThemeContext)
  useEffect(()=>{
    setLocation("")
  },[])
    function handleChange(e){
      const {name, value} = e.target
      setInputs((prevValue)=>{return{...prevValue,[name]:value}})
    }
    const sendEmail = async (e) => {
      e.preventDefault();
      try {
        await emailjs.sendForm('service_z9db8wr', 'contact_form', form.current, {
          publicKey: 'hYHh13w4RHiYMtnH7',
        })
        console.log("success")
        setInputs({user_name:"", user_email:"", message:""})
        setSent(true)
      } catch (error) {
        console.log(error)
      }
      
    };
 
    return (
      <>
        <Nav/>
        <div className = "resumePage">
          <div id = "resume">
            <h2>Resume</h2>
              <img src={resumeImage}/>
          </div>
          <div className="contactDiv">
            <h2>Contact Form</h2>
            <form ref= {form} onSubmit={(e)=>sendEmail(e)} id="contactForm">
              {!sent ? 
                <>
                  <label>
                    Name:
                    <input
                    type="text" 
                    name="user_name"
                    value = {inputs.user_name}
                    onChange={handleChange}
                    />
                  </label>

                  <label>
                    Email:
                    <input
                    type="email" 
                    name="user_email"
                    value = {inputs.user_email}
                    onChange={handleChange}
                    />
                  </label>

                  <label forhtml="mssg">
                  Your Message:
                  </label>
                  <textarea
                    name="message"
                    value = {inputs.message}
                    onChange={handleChange}
                  />
                  <div className="buttonRow">
                    <input type = "submit" value="Contact Me"/>
                    <a href="../assets/DanielleWilliamsResume.pdf" download>Resume Download</a>
                  </div>
                </>
                :
                <div className="sentMssg">
                  <p>Thank you for your message! Would you like to send another?</p>
                  <button onClick = {()=>setSent(false)}>Send Another</button>
                </div>
              }
            </form>
          </div>
        </div>
      </>
    )
  }
  
  export default Resume
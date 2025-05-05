
import { useRef, useState } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Nav from "../Nav"
import './security.css'
import securityPlan from './projects/securityPlan.pdf'
import policyA from './projects/changecontrolmanagementpolicy.pdf'
import policyB from './projects/SDLCpolicy.pdf'
import casestudy from './projects/Casestudy.pdf'
import sheet from './projects/simplematuritysheet.pdf'
import explanation from './projects/simpleMaturityPrioritization.pdf'
function SecurityProject({pdf, descript, name}) {
  const[chevron, setChevron] = useState(
    {
      casestudy:false, 
      securityplan:false,
      policies:false, 
      ssm:false}
  )
  const animationScope = useRef()
  const {contextSafe} = useGSAP({scope:animationScope})
  const openProject = contextSafe((project)=>{
    setChevron((prevObj)=>{return{...prevObj, [project]:!prevObj[project]}})
    !chevron[project]?
    gsap.to(`.${project}`, {height:"auto", duration:1}):
    gsap.to(`.${project}`, {height:"65px", duration:1})
  })
  
  return (
    <>
      <Nav/>
      <h1>Cybersecurity Projects</h1>
      <div ref = {animationScope}>
        <div className={`projectDropDown casestudy`}>
          <h1>Case Study <span onClick={()=>openProject('casestudy')} class="material-symbols-outlined">{!chevron.casestudy?'keyboard_arrow_down':'keyboard_arrow_up'}</span>
          </h1>
          <div  className="projectContainer">
            <iframe className="securityProjects" id ={""} src={casestudy}width={"350px"} height={"445px"}/>
            <p>Snow Be is a fictional company that is used to inform the projects on this page</p>
          </div>
        </div>
        <div className={`projectDropDown securityplan`}>
          <h1>Security Plan  <span onClick={()=>openProject('securityplan')}  class="material-symbols-outlined">{!chevron.securityplan?`keyboard_arrow_down`:'keyboard_arrow_up'}</span></h1>
          <div  className="projectContainer">
            <iframe className="securityProjects" id ={""} src={securityPlan} width={"350px"} height={"445px"}/>
            <p>This security policy was written is to ensure that standardized methods and procedures are used to enable beneficial changes while ensuring efficient and prompt handling of all changes to services. This policy aims to minimize the disruption of services, reduce back-out activities, and ensure clear communication across SnowBe, its employees, and when applicable its customers. </p>
          </div>
        </div>
        <div className={`projectDropDown policies`}>
          <h1>Policies  <span onClick={()=>openProject('policies')}  class="material-symbols-outlined">{!chevron.policies?'keyboard_arrow_down':'keyboard_arrow_up'}</span></h1>
          <div className="projectContainer">
            <div>
              <h2>Change management Policy</h2>
              <iframe className="securityProjects" id ={""} src={policyA}  width={"350px"} height={"445px"}/>
            </div>
            <div>
              <h2>SDLC Policy</h2>
              <iframe className="securityProjects" id ={""} src={policyB}width={"350px"} height={"445px"}/>
            </div>
            <ul>
              <li>The <b>Change Management</b>'s objective is to ensure that standardized methods and procedures are used to enable beneficial changes while ensuring efficient and prompt handling of all changes to services. This policy aims to minimize the disruption of services, reduce back-out activities, and ensure clear communication across SnowBe, its employees, and when applicable its customers. </li>
              <li>The purpose of the <b>Software Development Lifecycle policy</b> is to provide IT Project Managers with the tools to help ensure successful implementation of systems that satisfy SnowBe strategic and business objectives. The documentation provides a mechanism to ensure that executive leadership, functional managers and users sign-off on the requirements and implementation of the system. The process provides SnowBe Project Managers with the visibility of design, development, and implementation status needed to ensure delivery on time and within budget.</li>
            </ul>
          </div>
        </div>
        <div className={`projectDropDown ssm`}>
          <h1>Cybersecurity Maturity Model  <span onClick={()=>openProject('ssm')} class="material-symbols-outlined">{!chevron.ssm?'keyboard_arrow_down':'keyboard_arrow_up'}</span></h1>
          <div className="projectContainer">
            <div>
              <h2>CSM Graphic</h2>
              <iframe className="securityProjects" id ={""} src={sheet}width={"350px"} height={"445px"}/>
            </div>
            <div>
              <h2>CSM Write Up</h2>
              <iframe className="securityProjects" id ={""} src={explanation}width={"350px"} height={"445px"}/>
            </div>
            <ul>
              <li>The <b>Cybersecurity Model Graphic</b> provides a visual model for a measurment of SnowBe's cybersecurity maturity.</li>
              <li>The <b>Cybersecurity Model Write up</b> is an indepth explanation of SnowBe's cybersecurity maturity</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
  }
  
  export default SecurityProject
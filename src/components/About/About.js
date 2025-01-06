import React,{useState,useEffect} from 'react'
import { Experience } from './AboutComponents/Experience'
import avatar from "../Styling/img/ProfilePhoto.png"
import { Skill } from './AboutComponents/Skill'
import { useDispatch } from 'react-redux'
import { GET_FORMATIONS } from '../../actions/types'
import { useLocation, useNavigate } from 'react-router-dom'
import cv from '../Styling/CV/MON_CV_english_scarlet.pdf'

export const About = ({setPath}) => {
    const location=useLocation()
    const navigate=useNavigate()



    const pageName=(link)=>{
    switch(link){
        case '/go/Blog':
          return 'BLOG'
          break
        case '/go/About':
          return "ABOUT"
          break
        case '/go/Portfolio':
          return "PORTFOLIO"
        case 'Contact':
          return "CONTACT"
        case 'Home':
          return "HOME"
    }
    }
    
    useEffect(()=>{
    setPath(pageName(location.pathname))
    },[])

  return (
    <>
    {/* HEADER */}
    {/* <section id="showcase" className="py-5">
        <div className="primary-overlay">
            <div className="container">
                <div className="row ">
                    <div className="col text-center text-white" style={{width: "50%"}}>
                        <h3 className="display-2 mt-5 pt-5">this is home</h3>
                        <div className="flexRowCenter">
                            <div>About</div>
                            <div>/</div>
                            <div ><a href="index.html" className="text-color-prim">HOME</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    <section id="aboutMe" className="py-5">

<div className="container">
    <div className="row">
    <div className="col-12">
        <h1 className="text-color-prim text-center">About ME</h1>
    </div>
    <div className="col-12 text-center text-white">
        <h4 className="description">Lets get you know me better.</h4>
    </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-6 flexRowCenter">
            <div className='avatar-container'>
                <img src={avatar} className='avatar'/>
            </div>
            
        </div>
        <div className="col-md-6 flexCol text-white">
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Firstname         :</span><span style={{color: "#FF2400"}}>ANAS</span>  </div>
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Lastname         :</span><span style={{color: "#FF2400"}}>BENOMAR</span>  </div>
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Birthday        :</span><span style={{color: "#FF2400"}}>26/06/1988</span>  </div>
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Nationality         :</span><span style={{color: "#FF2400"}}>Moroccan</span>  </div>
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Experience         :</span><span style={{color: "#FF2400"}}>6 Years</span>  </div>
            <a className='filledButton' href='/static/media/MON_CV_english_scarlet.68ddf9e6963585fc16cd.pdf' target='_blank'>DOWNLOAD MY CV</a>
            

        </div>
    </div>
</div>

</section>

<section id="exp&edu" className="py-5 bg-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-6" id="experience">
               
                     <h1 className="text-color-prim">Experience</h1>

                          {/* <!-- 1 Item --> */}
                    <Experience duration={"2018-2024"} job_name={"Freelancing"} company={"Freelance"} description={"Development and maintenance of web applications using React.js, React Native, Django, and Flask. Design and implementation of database schemas with MySQL and MongoDB. Implementation of cybersecurity measures to ensure the integrity and security of web applications."}/>
                    <Experience duration={"2021-2022"} job_name={"SOC Analyst"} company={"MRSOC"} description={"Worked with SIEM tools like Wireshark, Splun Enterprise and Snort to monitore the company’s network."}/>
                    <Experience duration={"2022-2024"} job_name={"Security Manager"} company={"MRSOC"} description={"Contributed in developping the overall security poster by choosing the right tools and implementing the best controls using international frameworks like NIST anad ISO 27000."}/>
         

                     
                </div>
                <div className="col-md-6" id="education">
                    <h1 className="text-white">Education</h1>
 
{/* {formations.map((formation,index)=><Experience  duration={formation.duration} job_name={formation.name} company={"Tets"} description={formation.desscription}/>)} */}
                    <Experience duration={"2014 - 2017"} job_name={"Software Engeneer"} company={"RABAT"} description={"Institut National des Postes et Télécomunications."}/>
                    <Experience duration={"2019 - 2021"} job_name={"Master Degree in Cybersecurity"} company={"RABAT"} description={"Institut National des Postes et Télécomunications."}/>
                    <Experience duration={"2024"} job_name={"Consultant"} company={"Google"} description={"Google CyberSecurity Certification- COURSERA"}/>
{/* <!-- 1 Item ends --> */}

                </div>
                 
            </div>
        </div>
    </section>

    <section id="about" className="py-5">
        <div className="container">
            <h1 className="skills text-color-prim">skills</h1>
            <div className="row">
                <Skill skill={"Python"} value={90}/>
                <Skill skill={"Django"} value={90}/>
                <Skill skill={"Django Rest Framework"} value={85}/>
                <Skill skill={"React js"} value={80}/>
                <Skill skill={"React native"} value={70}/>
                <Skill skill={"AWS"} value={60}/>
                
            </div>
           
              

        </div>
    </section>

</>
  )
}

import React,{useState,useEffect} from 'react'
import { Experience } from './AboutComponents/Experience'
import avatar from "../Styling/img/ProfilePhoto.png"
import { Skill } from './AboutComponents/Skill'
import { useDispatch } from 'react-redux'
import { GET_FORMATIONS } from '../../actions/types'

export const About = () => {
    const[formations,setFormations]=useState([])
    const dipatch=useDispatch()

    useEffect(()=>{
        const fetchFormations=async()=>{
            const request=await fetch('http://localhost:8000/api/formations/')
            const results=await request.json()
            console.log(results)
            setFormations(results)
            dipatch({
                type:GET_FORMATIONS,
                payload:results
            })
        }

        fetchFormations()
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
        <h4 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
    </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-6 flexRowCenter">
            <div style={{position: "relative",border: "10px solid #3498db",width: "400px",height: "400px"}}>
                <img src={avatar}   style={{width: "400px",position: "absolute",top: "-20px",right: "10px"}}/>
            </div>
            
        </div>
        <div className="col-md-6 flexCol text-white">
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Name         :</span><span style={{color: "#3498db"}}>BENOMAR</span>  </div>
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Name         :</span><span style={{color: "#3498db"}}>BENOMAR</span>  </div>
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Name         :</span><span style={{color: "#3498db"}}>BENOMAR</span>  </div>
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Name         :</span><span style={{color: "#3498db"}}>BENOMAR</span>  </div>
            <div className="m-4"><span style={{fontWeight: "bolder",marginRight: "100px"}}>Name         :</span><span style={{color: "#3498db"}}>BENOMAR</span>  </div>
            

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
                    <Experience duration={"2010-2014"} job_name={"Consultant"} company={"Google"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy."}/>
                    <Experience duration={"2010-2014"} job_name={"Consultant"} company={"Google"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy."}/>
                    <Experience duration={"2010-2014"} job_name={"Consultant"} company={"Google"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy."}/>
         

                     
                </div>
                <div className="col-md-6" id="education">
                    <h1 className="text-white">Education</h1>
 
{formations.map((formation,index)=><Experience  duration={formation.duration} job_name={formation.name} company={"Tets"} description={formation.desscription}/>)}
                    <Experience duration={"2010-2014"} job_name={"Consultant"} company={"Google"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy."}/>
                    <Experience duration={"2010-2014"} job_name={"Consultant"} company={"Google"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy."}/>
                    <Experience duration={"2010-2014"} job_name={"Consultant"} company={"Google"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy."}/>
{/* <!-- 1 Item ends --> */}

                </div>
                 
            </div>
        </div>
    </section>

    <section id="about" className="py-5">
        <div className="container">
            <h1 className="skills text-color-prim">skills</h1>
            <div className="row">
                <Skill skill={"Python"} value={56}/>
                <Skill skill={"Django"} value={60}/>
                <Skill skill={"Django Rest Framework"} value={70}/>
                <Skill skill={"React js"} value={56}/>
                <Skill skill={"React native"} value={56}/>
                <Skill skill={"AWS"} value={20}/>
                
            </div>
           
              

        </div>
    </section>

</>
  )
}

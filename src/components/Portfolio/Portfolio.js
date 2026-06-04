import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import bfdrive from '../Styling/img/bfdrive.webp'
import machango from '../Styling/img/machango.webp'
import mikaza from '../Styling/img/miKaza.webp'
import bfdriveMobile from '../Styling/img/bfdrive_mobile.webp'
import dentiste from "../Styling/img/dentiste.webp"
import toagri from "../Styling/img/toagri.webp"

const projects=[
    {
        id:1,
        name:"BF Drive",
        description:"A web application for managing and sharing files.",
        image:bfdrive,
        link:"https://bfdrive.ma"
    },  
    {
        id:2,
        name:"BF Drive Mobile",
        description:"A web application for managing and sharing files.",
        image:bfdriveMobile,
        link:"https://play.google.com/store/apps/details?id=com.bfdrive.mcar"
    },
    {
        id:3,
        name:"Machango",
        description:"A web application for managing and sharing files.",
        image:machango,
        link:"https://machango.vercel.app/"
    },
    {
        id:4,
        name:"Mikaza",
        description:"A web application for managing and sharing files.",
        image:mikaza,
        link:"https://mikaza-renov.vercel.app/"
    },
    {
        id:5,
        name:"dentiste",
        description:"A web application for managing and sharing files.",
        image:dentiste,
        link:"https://dentiste-ennouira.ma/"
    },
    {
        id:6,
        name:"Toagri",
        description:"A web application for managing and sharing files.",
        image:toagri,
        link:"https://d3cipv40mmghiw.cloudfront.net/"
    },  
  
]
export const Portfolio = ({setPath}) => {

    const location=useLocation()



const pageName=(link)=>{
switch(link){
    case '/go/Blog':
      return 'BLOG'
    case '/go/About':
      return "ABOUT"
    case '/go/Portfolio':
      return "PORTFOLIO"
    case 'Contact':
      return "CONTACT"
    case 'Home':
      return "HOME"
    default:
      return ""
}
}

useEffect(()=>{
setPath(pageName(location.pathname))
},[location.pathname, setPath])
  return (
    <>
     <section id="portfolio" className="py-5">

<div className="container">
    <div className="row">
    <div className="col-12">
        <h1 className="text-color-prim text-center">Portfolio</h1>
    </div>
    <div className="col-12 text-center text-white">
        <h4 className="description">My recent Projects</h4>
    </div>
    </div>
    <div className="row mt-5">
    {projects.map((project)=>(
        <div className="col-md-4 p-3" key={project.id}>
            <a target="_blank" rel="noreferrer" href={project.link}>
                <img src={project.image} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
            </a>
        </div>
    ))}
    {/* <div className="col-md-4 p-3">
        <a target="_blank" rel="noreferrer" href="https://bfdrive.ma">
            <img src={bfdrive} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
    <div className="col-md-4 p-3">
        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.bfdrive.mcar">
            <img src={bfdriveMobile} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
    <div className="col-md-4 p-3">
        <a target="_blank" rel="noreferrer" href="https://mikaza-renov.vercel.app/">
            <img src={mikaza} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
    <div className="col-md-4 p-3">
        <a target="_blank" rel="noreferrer" href="/">
            <img src={portfolio} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
    <div className="col-md-4 p-3">
        <a target="_blank" rel="noreferrer" href="https://matchango.vercel.app/">
            <img src={machango} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
    <div className="col-md-4 p-3">
        <a target="_blank" rel="noreferrer" href="https://d3cipv40mmghiw.cloudfront.net/">
            <img src={toagri} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div> */}
    {/* <div className="col-md-4 p-3">
        <a href="#">
            <img src="https://slimhamdi.net/istanbul/demos/img/projects/project-6.jpg" alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div> */}
    </div>
</div>

</section>
    </>
  )
}

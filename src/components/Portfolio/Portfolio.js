import React,{useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import bfdrive from '../Styling/img/bfdrive.jpeg'
import machango from '../Styling/img/machango.jpeg'
import mikaza from '../Styling/img/miKaza.jpeg'
import bfdriveMobile from '../Styling/img/bfdrive_mobile.jpeg'
import portfolio from "../Styling/img/portfolio.jpeg"
export const Portfolio = ({setPath}) => {

    const location=useLocation()



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
    <div className="col-md-4 p-3">
        <a target="_blank" href="https://bfdrive.ma">
            <img src={bfdrive} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
    <div className="col-md-4 p-3">
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bfdrive.mcar">
            <img src={bfdriveMobile} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
    <div className="col-md-4 p-3">
        <a target="_blank" href="https://mikaza-renov.vercel.app/">
            <img src={mikaza} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
    <div className="col-md-4 p-3">
        <a target="_blank" href="/">
            <img src={portfolio} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
    <div className="col-md-4 p-3">
        <a target="_blank" href="https://matchango.vercel.app/">
            <img src={machango} alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
        </a>
    </div>
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

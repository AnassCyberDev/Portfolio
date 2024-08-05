import React from 'react'
import '../Styling/css/style.css'
import '../Styling/css/bootstrap.css'
import avatar from '../Styling/img/ProfilePhoto.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const navigate=useNavigate()
  return (
    <div id="HomeBody">
<div className="primary-overlay">
   
    {/* <nav className="navigationBar">
        <div className="container">
 
   
        <ul className="navigationUl">
            <li className="navLi">
                <a href="/" className="navLinks current">Home</a>
            </li>
            <li className="navLi">
                <a href="about" className="navLinks">About</a>
            </li>
            <li className="navLi">
                <a href="portfolio" className="navLinks">Portfolio</a>
            </li>
            <li className="navLi">
                <a href="blog" className="navLinks">Blog</a>
            </li>
            <li className="navLi">
                <a href="contact" className="navLinks">Contact</a>
            </li>
         
        </ul>
        </div>
       
    </nav> */}
    <section id="Home" className='flexRowCenter'>
        <div className="row aboutMe" >
            <div className="col-md-6 flexRowCenter">
                <div className='avatar-container'>
                    <img src={avatar}   className='avatar'/>
                </div>
            
            </div>
            <div className="col-md-6 flexRowCenter">
                <div className="flexCol w50">
            <h4 className="text-white" style={{fontWeight:"bolder"}}>HI THERE</h4>
            <h2><span className="text-white" style={{fontWeight:"bolder"}}>I'M</span> <span className="text-color-prim" style={{fontWeight:"bolder"}}>BENOMAR</span></h2>
            <p className="text-white mt-3">
            For me, development is not just a job, but a passion. Each task represents a masterpiece, a challenge, and a part of my identity.</p>
            <div className='flexRowCenter'>
                <button className='filledButton' onClick={()=>navigate('/go/Portfolio')}>My Portfolio</button>
                <button className='transparentButton' onClick={()=>navigate('/go/About')}>About Me</button>
            </div>
        </div>
            </div>
        </div>
    </section>
    </div>

    </div>
  )
}

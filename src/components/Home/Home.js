import React from 'react'
import '../Styling/css/style.css'
import '../Styling/css/bootstrap.css'
import avatar from '../Styling/img/ProfilePhoto.png'


export const Home = () => {
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
        <div className="row aboutMe"  style={{width: "70%", height: "80%"}}>
            <div className="col-md-6 flexRowCenter">
                <div style={{position: "relative",border:" 10px solid #FF2400", width: "400px",height: "400px"}}>
                    <img src={avatar}   style={{width: 400,position: "absolute",top: "-20px",right: "10px"}}/>
                </div>
            
            </div>
            <div className="col-md-6 flexRowCenter">
                <div className="flexCol w50">
            <h4 className="text-white">HI THERE</h4>
            <h2><span className="text-white">I'M</span> <span className="text-color-prim">BENOMAR</span></h2>
            <p className="text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos ex consequuntur accusamus sapiente voluptatibus asperiores nostrum quos harum tempore debitis deleniti soluta odit cupiditate, consectetur accusantium repellat aspernatur voluptatum!</p>
        </div>
            </div>
        </div>
    </section>
    </div>

    </div>
  )
}

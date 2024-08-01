import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Banner = ({path}) => {


  
    
  return (
    <>
    <section id="showcase" className="py-5">
    <div className="primary-overlay">
        <div className="container">
            <div className="row ">
                <div className="col text-center text-white flexColCenter" style={{width: "50%"}}>
                    <h3 className="display-3 mt-5 pt-5" style={{fontWeight:"bolder"}}>THIS IS<span className='text-color-prim ml-2'>{path}</span> </h3>
                    <div className="flexRowCenter p-2" style={{backgroundColor:"#222",borderRadius:10,width:"30%"}}>
                        <div>{path}</div>
                        <div>/</div>
                        <div ><Link to={("/")} className="text-color-prim" style={{fontWeight:"bold"}}>HOME</Link></div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</section>
<Outlet/>
</>
  )
}

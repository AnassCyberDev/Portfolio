import React from 'react'
import { Outlet } from 'react-router-dom'

export const Banner = () => {
  return (
    <>
    <section id="showcase" className="py-5">
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
</section>
<Outlet/>
</>
  )
}

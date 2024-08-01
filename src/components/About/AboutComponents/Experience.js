import React from 'react'
import "../../Styling/css/style.css"

export const Experience = ({duration,job_name,company,description}) => {
  return (
    <div className="flexRowCenter" style={{width:"90%"}}>
    <div style={{position: "relative"}}>
        <div className="historyTimeline">f</div>
    <span className="bullet"></span>
     </div>
    <div className="card bg-sec text-white" style={{backgroundColor:"#222",width:"100%"}}>
        <div className="card-header">
            <span className="year"><i className="fa-regular fa-calendar-days"></i> {duration}</span>
            <span className="d-block font-weight-400 uppercase">
            {job_name}
            <span className="separator"></span>
            <span className="font-weight-700">{company}</span>
            </span>
        </div>
        <div className="card-body">
            <p>
                {description}
            </p>
        </div>
    </div>
</div>
  )
}

import React from 'react'
import "../../Styling/css/style.css"

export const Experience = ({duration,job_name,company,description}) => {
  return (
    <div class="flexRowCenter" style={{width:"90%"}}>
    <div style={{position: "relative"}}>
        <div class="historyTimeline">f</div>
    <span class="bullet"></span>
     </div>
    <div class="card bg-sec text-white" style={{backgroundColor:"#222",width:"100%"}}>
        <div class="card-header">
            <span class="year"><i class="fa-regular fa-calendar-days"></i> {duration}</span>
            <span class="d-block font-weight-400 uppercase">
            {job_name}
            <span class="separator"></span>
            <span class="font-weight-700">{company}</span>
            </span>
        </div>
        <div class="card-body">
            <p>
                {description}
            </p>
        </div>
    </div>
</div>
  )
}

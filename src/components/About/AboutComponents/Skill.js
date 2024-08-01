import React from 'react'

export const Skill = ({skill,value}) => {
  return (
    <div className="col-md-4 mt-4"> 
                    <h4 className="text-white"> {skill}</h4>
                    <div className="progress2">
                <div className="progress2-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={`${value}`} aria-valuemin="0" aria-valuemax="100" style={{width: `${value}%`}}></div>
              </div></div>
  )
}

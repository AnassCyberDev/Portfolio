import React from 'react'

export const Skill = ({skill,value}) => {
  return (
    <div class="col-md-4 mt-4"> 
                    <h4 class="text-white"> {skill}</h4>
                    <div class="progress2">
                <div class="progress2-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={`${value}`} aria-valuemin="0" aria-valuemax="100" style={{width: `${value}%`}}></div>
              </div></div>
  )
}

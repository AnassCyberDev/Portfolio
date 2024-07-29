import { GET_FORMATIONS } from "./types"
const ip_address=''

export const fetchFormations=()=>{
    return async function(dispatch)
 
    {console.log('testing') 
         const data=await fetch(`${ip_address}/api/formations/`
    //         ,{
       
    //      headers:{
    //          "Authorization":`Bearer ${localStorage.getItem('access_token')}`,
    //      }
    //  }
    )
     
         switch(data.status){
             case 200:
                 console.log('here')
                dispatch({
                     type:GET_FORMATIONS,
                     payload: await data.json()
                 })
                 break
 
         }
     }
     
 }
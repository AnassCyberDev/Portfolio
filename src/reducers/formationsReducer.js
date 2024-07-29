import { GET_FORMATIONS } from "../actions/types";

const initialState={
    items:[],

}


export default function (state=initialState, action){
    switch(action.type){
        case GET_FORMATIONS:
            return {
                ...state,
                items:action.payload
            }
           
                    
        default:
            return state
    }
}
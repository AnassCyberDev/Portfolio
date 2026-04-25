import { GET_ROUTE } from "../actions/types";

const initialState={
    route:'/',

}


const routeReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ROUTE:
            return {
                ...state,
                route:action.payload
            }
           
                    
        default:
            return state
    }
}

export default routeReducer
import { initialState } from "../Store/index.js"


const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SETBASEAUTH": 
			return {
					...state,
            b64Auth: action.payload
		}
		default:
		return state 	
	}
}

export default authReducer
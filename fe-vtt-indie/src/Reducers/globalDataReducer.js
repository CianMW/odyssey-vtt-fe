import { initialState } from "../Store/index.js"


const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SETLOGGEDIN": 
			return {
					...state,
			loggedIn: action.payload,
		}
		case "SETLOCATION": 
			return {
					...state,
			location: action.payload,
		}
		default:
		return state 	
	}
}

export default dataReducer
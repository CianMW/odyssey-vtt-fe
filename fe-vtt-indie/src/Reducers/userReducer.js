import { initialState } from "../Store/index.js"


const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SETUSER": 
			return {
					...state,
			info: action.payload,
		}
		default:
		return state 	
	}
}

export default userReducer
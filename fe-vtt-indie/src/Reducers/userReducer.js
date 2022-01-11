import { initialState } from "../Store/index.js"


const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FAVOURITE": 
			return {
					...state,
			favourites: [
				...state.favourites,
				 action.payload
			],
		}
		default:
		return state 	
	}
}

export default userReducer
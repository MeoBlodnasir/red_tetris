export default function reducer(state={
	num: 0}, action) {

	switch (action.type) {
		case "UP": {
			return {...state, num: state.num + 1}
		}
				   defaut:
					   break ;
	}

	return state
}

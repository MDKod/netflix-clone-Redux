import AT from "./actionTypes";

const initialState = {
	loading: true,
	error: null,
	watchList: [],
};

const WatchListReducer = (state = initialState, action) => {
	switch (action.type) {
		case AT.LIST_LOADING:
			return { ...state, loading: true };
		case AT.LIST_ERROR:
			return { ...state, loading: false, error: action.payload };
		case AT.LIST_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				watchList: action.payload,
			};
		case AT.ADD_TO_LIST: {
			const updatedList = state.watchList.concat(action.payload);
			return { ...state, watchList: updatedList };
		}
		case AT.REMOVE_FROM_LIST: {
			const filteredList = state.watchList.filter(
				(item) => item.id !== action.payload,
			);
			return { ...state, watchList: filteredList };
		}

		default:
			return state;
	}
};

export default WatchListReducer;

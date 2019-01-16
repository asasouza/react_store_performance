import { STORES_SEARCH_BY_NAME } from '../actions/types';
import StoresData from '../resources/data/data.js';

export default function (state = StoresData.stores, action) {
	switch (action.type) {
		case STORES_SEARCH_BY_NAME:
			return action.payload.stores;
		default: 
			return state;
	}
}

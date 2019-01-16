import { REVENUE_CHANGE } from '../actions/types';

export default function (state = 15000, action) {
	switch (action.type) {
		case REVENUE_CHANGE:
			return action.payload;
		default:
			return state;
	}
}

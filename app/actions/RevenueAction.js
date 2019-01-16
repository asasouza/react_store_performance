import { REVENUE_CHANGE } from './types';

export const revenueChange = (value) => {
	return {
		type: REVENUE_CHANGE,
		payload: value
	};
};

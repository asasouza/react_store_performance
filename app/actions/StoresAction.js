import { STORES_SEARCH_BY_NAME } from './types';
import StoresData from '../resources/data/data.js';


export const searchByName = (term) => {
	const storesArray = fetchStoresData().stores.filter(store => {
		return store.name.toUpperCase().startsWith(term.toUpperCase());
	});

	return {
		type: STORES_SEARCH_BY_NAME,
		payload: { stores: storesArray }
	};
};

const fetchStoresData = () => {
	return StoresData;
};

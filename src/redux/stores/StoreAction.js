import { STORE_API } from '../../configurations/apiConfig';
import { storeSlice } from './StoreSlice'

const {fetchStores} = storeSlice.actions

export const fetchStoresAsync = (size = 10,page = 0) => (dispatch) =>{
  	try{
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}
		
		fetch(STORE_API.concat(`store/page/${size}/${page}`), requestOptions)
		.then(response => response.json())
		.then(response => dispatch(fetchStores(response)))
		.catch(err => console.error(err));

	} catch (error) {
	  throw new Error('Erro ao buscar lojas');
	}

}
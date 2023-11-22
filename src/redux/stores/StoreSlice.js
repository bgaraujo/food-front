import { createSlice } from '@reduxjs/toolkit'


export const storeSlice = createSlice({
  	name: 'store',
  	initialState : {
		value:{
			content: [],
			pageable: {
				pageNumber: 0,
				pageSize: 0,
				offset: 0
			},
			totalPages: 0,
			totalElements: 0,
			empty: true
		}
	},
  	reducers: {
		fetchStores:(state, action) => {
			state.value = action.payload
		}
  	}
})

export default storeSlice.reducer
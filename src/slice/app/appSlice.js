import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    
}


const appSlice = createSlice({
    name: `app`,
    initialState,
    reducers: {
        initializedSuccess(state, action) {
            
        }
    }
})


export const {  } = appSlice.actions

export default appSlice.reducer
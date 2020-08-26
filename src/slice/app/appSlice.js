import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    catFoodList: [
        {id: 1, quantity: 1, contains: `фуа-гра`, portionsPerPack: 10, size: `0,5`, gift: 1, isSatisfied: false, tagline: `Печень утки разварная с артишоками.`},
        {id: 2, quantity: 1, contains: `рыбой`, portionsPerPack: 40, size: `2`, gift: 2, isSatisfied: false, tagline: `Головы щучьи с чесноком да свежайшая сёмгушка.`},
        {id: 3, quantity: 0, contains: `курой`, portionsPerPack: 100, size: `5`, gift: 5, isSatisfied: true, tagline: `Филе из цыплят с трюфелями в бульоне.`},
    ]
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
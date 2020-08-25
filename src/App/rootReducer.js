import { combineReducers } from '@reduxjs/toolkit'
import appReducer from '../slice/app/appSlice'


export const rootReducer = combineReducers({
    app: appReducer,
})
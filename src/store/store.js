import {configureStore} from '@reduxjs/toolkit'
import basic from '../slices/basicSlice'

const store = configureStore({ 
    reducer:{basic},
    });

export default store;
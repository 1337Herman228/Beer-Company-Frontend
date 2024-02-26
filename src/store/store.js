import {configureStore} from '@reduxjs/toolkit'
import basic from '../slices/navbarSlice'

const store = configureStore({ 
    reducer:{basic},
    });

export default store;
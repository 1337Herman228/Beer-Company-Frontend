import {createSlice} from '@reduxjs/toolkit'

import drinksJSON from './drinks.json'
import companyJSON from './/company.json'

const drinksArray = drinksJSON.drinks;
const companyArray = companyJSON.company;

const initialState = {

    isSnow: true,

    prevSubNavbar: 'none',
    subNavbar:'none',
    subNavIsActive: false,

    prevSubNavbarLVL2: 'none',
    subNavbarLVL2:'none',
    subNavLVL2IsActive: false,

    titlesAndLinks: [],
    images:[],
}

const basicSlice = createSlice({
    name: 'basic',  
    initialState,
    reducers: {

        activateSnow: (state)=>{
            state.isSnow = true
        },
        disactivateSnow: (state)=>{
            state.isSnow = false
        },

        showSubNavbar: (state, action)=>{
            state.prevSubNavbar = state.subNavbar
            state.subNavbar = action.payload
            state.subNavIsActive = true

            if( state.prevSubNavbar ===  state.subNavbar){
                state.subNavbar = 'none'
                state.subNavIsActive = false
            }   

        },
        showSubNavbarLVL2: (state, action)=>{
            state.prevSubNavbarLVL2 = state.subNavbarLVL2
            state.subNavbarLVL2 = action.payload
            state.subNavLVL2IsActive = true

            if( state.prevSubNavbarLVL2 ===  state.subNavbarLVL2){
                state.subNavbarLVL2 = 'none'
                state.subNavLVL2IsActive = false
            }
        },
        hideSubNavbar: (state)=>{
            state.prevSubNavbar = state.subNavbar
            state.subNavbar = 'none'
            state.subNavIsActive = false
        },
        hideSubNavbarLVL2: (state)=>{
            state.prevSubNavbarLVL2 = state.subNavbarLVL2
            state.subNavbarLVL2 = 'none'
            state.subNavLVL2IsActive = false
        },

        fullTitlesAndLinks: (state) => { 
            switch(state.subNavbar){
                case 'drinks': {state.titlesAndLinks = drinksArray; break}
                case 'company': {state.titlesAndLinks = companyArray; break}
                case 'default': return
            }
        },
    }}
)

const {actions,reducer} = basicSlice

export default reducer
export const {

    showSubNavbar,
    hideSubNavbar,
    fullTitlesAndLinks,
    showSubNavbarLVL2,
    hideSubNavbarLVL2,
    activateSnow,
    disactivateSnow,

} = actions 
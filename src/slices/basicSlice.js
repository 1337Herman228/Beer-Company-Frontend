import {createSlice} from '@reduxjs/toolkit'

import drinksJSON from './drinks.json'
import companyJSON from './/company.json'

const drinksArray = drinksJSON.drinks;
const companyArray = companyJSON.company;

const initialState = {

    prevSubNavbarLVL2: 'none',
    subNavbarLVL2: 'none',
    subNavLVL2Active: false,

    prevSubNavbar: 'none',
    subNavbar: 'none',
    subNavActive: false,
    titlesAndLinks: [],
}

const basicSlice = createSlice({
    name: 'basic',  
    initialState,
    reducers: {
        removeSubNavbar: state => {if(!state.subNavActive) state.subNavbar ='none'},
        removeSubNavbarLVL2: state => {if(!state.subNavLVL2Active) state.subNavbarLVL2 ='none'},

        showDrinks: state => {
            state.prevSubNavbar = state.subNavbar
            state.subNavbar ='drinks'},
        showCompany: state => {
            state.prevSubNavbar = state.subNavbar
            state.subNavbar ='company'},

        activateSubNav: state => { state.subNavActive = true},
        disactivateSubNav: state => { state.subNavActive = false},

        showSubNavbarLVL2: (state, action) => {
            state.prevSubNavbarLVL2 = state.subNavbarLVL2
            state.subNavbarLVL2 = action.payload
        },

        activateSubNavLVL2: state => { state.subNavLVL2Active = true},
        disactivateSubNavLVL2: state => { state.subNavLVL2Active = false},


        fullTitlesAndLinks: (state) => { 
            switch(state.subNavbar){
                case 'drinks': {state.titlesAndLinks = drinksArray; break}
                case 'company': {state.titlesAndLinks = companyArray; break}
                case 'default': return
            }
        },

        // heroesFiltered: (state, action)=> {
        //     state.activeFilter = action.payload
        //     state.heroesFilterStatus = 'filtered'},
        // filterHeroesError: state=> {state.heroesFilterStatus ='error'},
    }}
)

const {actions,reducer} = basicSlice

export default reducer
export const {
    showDrinks,
    removeSubNavbar,
    removeSubNavbarLVL2,
    activateSubNav,
    disactivateSubNav,
    showCompany,
    fullTitlesAndLinks,
    showSubNavbarLVL2,
    activateSubNavLVL2,
    disactivateSubNavLVL2
} = actions 
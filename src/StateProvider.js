import {useContext, createContext, useReducer} from 'react'

export const StateConetxt = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateConetxt.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateConetxt.Provider>
)

export const useStateValue = () => useContext(StateConetxt);
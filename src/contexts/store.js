import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


const initialState = {
    readingList: [
        {id: 1, title: 'Rich Dad, Poor Dad', thoughts: 'My first dive into the world of entrepreneurship. Highly recommemded'},
        {id: 2, title: '7 habits of highly effective people', thoughts: 'Learned a lot about productivity here.'
        + 'Try reading it during the holidays when you have time to think. That is when I read it.'},
        {id: 3, title: 'Rich Dad, Poor Dad', thoughts: 'My first dive into the world of entrepreneurship. Highly recommemded'}
    ],
    formOpen : false,
    favList : [
        {id: 3, title: 'Rich Dad, Poor Dad', thoughts: 'My first dive into the world of entrepreneurship. Highly recommemded'}
    ],
    readList : [
        {id: 4, title: 'No Excuses', thoughts: `People don't just become successful. They learn how to and it is a very purposeful adventure.`}
    ],
    wishList : [
        {id: 5, title: 'No Excuses', thoughts: `People don't just become successful. They learn how to and it is a very purposeful adventure.`}
    ],
    isEditing : [],
    // editReading : false
}


export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function addBook(reading) {
        dispatch ({
            type: 'ADD_BOOK_TO_READING_LIST',
            payload: reading
        })
    }
    function openForm() {
        dispatch ({
            type: 'OPEN_FORM'
        })
    }

    function deleteBook(id) {
        dispatch({
            type: 'DELETE_BOOK',
            payload: id
        })
    }

    function addToFav(id) {
        dispatch({
            type: 'ADD_TO_FAV',
            payload: id
        })
    }

    function readingDone(id) {
        dispatch({
            type: 'READING_DONE',
            payload: id
        })
    }

    function toggleEditing(id) {
        dispatch ({
            type: 'TOGGLE_EDITING',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            readingList : state.readingList,
            addBook,
            openForm,
            formOpen: state.formOpen,
            deleteBook,
            addToFav,
            favList: state.favList,
            readList : state.readList,
            readingDone,
            toggleEditing,
            editReading : state.reading.editReading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


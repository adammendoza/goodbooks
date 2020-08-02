export default (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK_TO_READING_LIST':
            return {
                ...state,
                readingList: [...state.readingList, action.payload],
                formOpen: false
            }
        case 'OPEN_FORM':
            return {
                ...state,
                formOpen: !state.formOpen
            }
        case 'DELETE_BOOK':
            return {
                ...state,
                readingList: state.readingList.filter(reading => reading.id !== action.payload) 
            }
        case 'ADD_TO_FAV': 
            const newFav = state.readingList.find(reading => reading.id === action.payload) 

            return {
                ...state,
                favList : [...state.favList, newFav]
            }
        case 'READING_DONE':
            const newRead = state.readingList.find(reading => reading.id === action.payload)
            return {
                readList : [...state.readList, newRead],
                readingList : state.readingList.filter(reading => reading.id !== action.payload) 
            }
        case 'TOGGLE_EDITING':
            
            return {
            readingList: state.readingList.map(reading => reading.id === action.payload ? { ...reading, editReading: !reading.editReading} : 
                reading)
            } 
                
        default:
            return state;
    }
}
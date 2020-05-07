const initialState = {
    itemsList: [],
    currentItem: {}
}

const reducerItems = (state = initialState, action) => {

    
    if (action.type === "GET_ITEMS_LIST") {

        return {
            ...state,
            itemsList: action.payload
        };
    }

    if (action.type === "GET_ITEMS_LIST_ERROR") {
        
                return {
                    ...state,
                    itemsList: []
                };
            }

    if (action.type === "FIND_ITEM") {
        
        return {
            ...state,
            itemsList:  action.payload
        };
    }

    if (action.type === "FIND_ITEM_ERROR") {
        
        return {
            ...state,
            itemsList:  []
        };
    }

    if ( action.type === "GET_CURRENT_ITEM" ) {
        return {
            ...state,
            currentItem: state.itemsList.find(i => i.id === action.payload)
        }
    }

    return state
}

export default reducerItems;
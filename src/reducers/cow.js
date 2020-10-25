const cow = (state, action) => {
    if (state === undefined){
        return 0
    }
    switch (action.type) {
        case 'ADD_COW':
            return state.cow + 1
        default:
            return state.cow
    }
}

export default cow
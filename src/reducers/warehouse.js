const warehouse = (state, action) => {
    if (state === undefined){
        return {
            chicken: 0
        }
    }
    switch (action.type) {
        case 'ADD_COW':
            return state.cow + 1
        default:
            return state.cow
    }
}

export default warehouse;
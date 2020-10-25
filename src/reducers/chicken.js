const chicken = (state, action) => {
    if (state === undefined){
        return 0
    }
    switch (action.type) {
        case 'ADD_CHICKEN':
            return state.chicken + 1;
        default:
            return state.chicken
    }
}

export default chicken
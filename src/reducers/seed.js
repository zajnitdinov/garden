const seed = (state, action) => {
    if (state === undefined){
        return 0
    }
    switch (action.type) {
        case 'ADD_SEED':
            return state.seed + 1;
        default:
            return state.seed
    }
}

export default seed;
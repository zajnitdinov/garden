const coins = (state, action) => {
    if (state === undefined){
        return 100
    }
    switch (action.type) {
        case 'SPEND_MONEY':
            return state.coins - action.payload
        default:
            return state.coins
    }
}

export default coins;
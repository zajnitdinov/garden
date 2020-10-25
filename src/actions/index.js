export const addItem = type => {
    switch (type) {
        case 'seed':
            return {type: 'ADD_SEED'}
        case 'chicken':
            return {type: 'ADD_CHICKEN'}
        case 'cow':
            return {type: 'ADD_COW'}
        default:
            break;
    }
}

export const spendMoney = payload => {
    return {
        type: 'SPEND_MONEY',
        payload
    }
}
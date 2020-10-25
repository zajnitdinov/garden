import {chickenCell, cowCell, seedCell} from "./cellState";

export const obj = {
    cow: {
        id: 'cow',
        time: 10000,
        html: cowCell
    },
    chicken: {
        id: 'chicken',
        time: 5000,
        html: chickenCell
    },
    seed: {
        id: 'seed',
        time: 3000,
        html: seedCell
    }
};
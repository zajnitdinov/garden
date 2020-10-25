import {chickenCell, cowCell, seedCell} from "./cellState";

export const obj = {
    seed: {
        id: 'seed',
        title: 'пшеница',
        time: 3000,
        cost: 10,
        html: seedCell,
        img: '/icons/seed.png'
    },
    chicken: {
        id: 'chicken',
        title: 'курица',
        time: 5000,
        cost: 50,
        html: chickenCell,
        img: '/icons/chicken.png'
    },
    cow: {
        id: 'cow',
        title: 'корова',
        time: 10000,
        cost: 100,
        html: cowCell,
        img: '/icons/cow.png'
    },
};
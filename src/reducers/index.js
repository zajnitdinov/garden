import coins from "./coins";
import seed from "./seed";
import cow from "./cow";
import chicken from "./chicken";

const reducer = (state , action) => {
    return{
        coins: coins(state, action),
        seed: seed(state, action),
        cow: cow(state, action),
        chicken: chicken(state, action)
    }
}

export default reducer;
import coins from "./coins";
import ceed from "./ceed";

const reducer = (state , action) => {
    return{
        coins: coins(state, action),
        ceed: ceed(state, action)
    }
}

export default reducer;
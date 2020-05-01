import ActionTypes from "./game.types";
import { spinReels } from "../game/game.utils"


const INITIAL_STATE = {
    coins: 20,
    reels: [
        ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"],
        ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"],
        ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]
    ],
    spinRes: ["cherry", "cherry", "cherry"]
}

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SPIN_REELS:
            const res = spinReels(state.reels);
            return {
                ...state,
                spinRes: res.reelResult,
                coins: state.coins - 1 + res.score  //Take 1 Coin to spin and add the score
            };
        default:
            return state
    }
}

export default gameReducer;
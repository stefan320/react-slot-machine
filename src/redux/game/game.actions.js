import ActionTypes from "./game.types";

export const spinReels = reels => {
    return {
        type: ActionTypes.SPIN_REELS,
        payload: reels
    }

};
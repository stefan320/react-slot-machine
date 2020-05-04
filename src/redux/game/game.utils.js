const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
}

export const spinReels = (reelArrays) => {
    const matchingFruits = { lemon: 0, banana: 0, apple: 0, cherry: 0 };

    //Get reel and Add 1 for Every matchingFruit 
    const reelResult = reelArrays.map(
        (reel) => {
            const curReel = reel[randomNumber(reel.length)];
            matchingFruits[curReel] += 1
            return curReel;
        }
    );

    //Test for winnings 
    const score =
        matchingFruits.lemon === 3 ? 3
            : matchingFruits.banana === 2 ? 5
                : matchingFruits.banana === 3 ? 15
                    : matchingFruits.apple === 2 ? 10
                        : matchingFruits.apple === 3 ? 20
                            : matchingFruits.cherry === 2 ? 40
                                : matchingFruits.cherry === 3 ? 50
                                    : 0;
    return { reelResult, score };
}

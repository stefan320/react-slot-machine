import { React, Component } from "react";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      coins: 20,
      reels: {
        reelOne: [
          "cherry",
          "lemon",
          "apple",
          "lemon",
          "banana",
          "banana",
          "lemon",
          "lemon",
        ],
        reelTwo: [
          "lemon",
          "apple",
          "lemon",
          "lemon",
          "cherry",
          "apple",
          "banana",
          "lemon",
        ],
        reelThree: [
          "lemon",
          "apple",
          "lemon",
          "apple",
          "cherry",
          "lemon",
          "banana",
          "lemon",
        ],
      },
    };
  }
}

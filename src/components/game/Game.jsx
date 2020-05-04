import React from "react";
import GameResult from "../gameResult/GameResult.component"
import CustomButton from "../customButton/CustomButton.component"
import ActionTypes from "../../redux/game/game.types"

import "./game.styles.scss"

import { connect } from "react-redux";


const Game = (props) => {
  return (
    <div className="game">
      <h1 className="game--score">Coins: {props.coins}</h1>
      <GameResult reels={props.reels} />
      <CustomButton type={"button"} color={"game"} clicked={props.spinReels}>SPIN</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  reels: state.spinRes,
  coins: state.coins
});

const mapDispatchToProps = (dispatch) => {
  return {
    spinReels: () => dispatch({ type: ActionTypes.SPIN_REELS })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

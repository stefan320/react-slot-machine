import React from "react";
import SlotMachine from "../slotMachine/SlotMachine.component"
import CustomButton from "../customButton/CustomButton.component"
import ActionTypes from "../../redux/game/game.types"

import { connect } from "react-redux";

class Game extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Score: {this.props.coins}</h1>
        {/* <button onClick={this.props.spinReels}>SPIN REELS!</button> */}
        <CustomButton type={"button"} clicked={this.props.spinReels}>SPIN REELS!</CustomButton>
        <SlotMachine reels={this.props.reels} />
      </div >
    );
  }
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

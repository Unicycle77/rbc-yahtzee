import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    const {dice, locked, disabled, handleClick} = this.props;
    return <div className="Dice">
      {dice.map((d, idx) =>
        <Die handleClick={handleClick}
          val={d}
          locked={locked[idx]}
          disabled={disabled}
          idx={idx}
          key={idx} />
      )}
    </div>
  }
}

export default Dice;
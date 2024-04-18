import React from 'react'
import "./GameInfo.css"
import { GAME_STATUS, PLAYER_X } from '../../constanstx';

type Props = {
  playerNames: { player1: string, player2: string };
  gameState: number;
  playerTurn: string;
}

const GameInfo = (props: Props) => {
  switch (props.gameState) {
    case GAME_STATUS.IN_PROGRESS:
      return <div className="game-over">{props.playerTurn == PLAYER_X ? `${props.playerNames.player1}'s turn` : `${props.playerNames.player2}'s turn`}</div>
    case GAME_STATUS.PLAYER_1_WIN:
      return <div className="game-over">{props.playerNames.player1} wins!</div>;
    case GAME_STATUS.PLAYER_2_WIN:
      return <div className="game-over">{props.playerNames.player2} wins!</div>;
    case GAME_STATUS.DRAW:
      return <div className="game-over">Draw!</div>;
    default:
      return <></>;
  }
}

export default GameInfo
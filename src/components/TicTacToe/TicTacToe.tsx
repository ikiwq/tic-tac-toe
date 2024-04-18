import React, { useEffect, useState } from 'react'
import "./TicTacToe.css"
import Board from '../Board/Board'
import { GAME_STATUS, PLAYER_O, PLAYER_X, WIN_COMBINATIONS } from '../../constanstx'
import LeaderBoard from '../LeaderBoard/LeaderBoard'
import NamePicker from '../NamePicker/NamePicker'
import { checkForPlayerWin } from '../funcs'
import GameInfo from '../GameInfo/GameInfo'
type Props = {}

const TicTacToe = (props: Props) => {
  const [openHistory, setOpenHistory] = useState(false);

  // TILES
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const handleTileClick = (index: number) => {
    if (tiles[index] !== null || gameState !== GAME_STATUS.IN_PROGRESS) return;

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    updatePlayerTurn();
  }

  // GAME STATE 
  const [gameState, setGameState] = useState(GAME_STATUS.PREPARING);
  const [strikeClass, setStrikeClass] = useState("");

  const newGame = () => {
    setTiles(Array(9).fill(null));
    setGameState(GAME_STATUS.IN_PROGRESS);
    setStrikeClass("");
  }

  const reset = () => {
    newGame();
    setPlayerNames({ player1: "", player2: "" });
    setGameState(GAME_STATUS.PREPARING);
  }

  useEffect(() => {
    checkForPlayerWin(tiles, playerNames, setGameState, setStrikeClass);
  }, [tiles]);

  // PLAYER
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [playerNames, setPlayerNames] = useState({ player1: "", player2: "" });

  const updatePlayerTurn = () => {
    playerTurn === PLAYER_X ? setPlayerTurn(PLAYER_O) : setPlayerTurn(PLAYER_X);
  }

  return (
    <div className='container'>
      <p onClick={() => setOpenHistory(!openHistory)} className='history-button'>
        {openHistory ? "X" : "..."}
      </p>

      {
        openHistory &&
        (
          <LeaderBoard open={openHistory} />
        )
      }

      <h1 className='board-title'>Tic Tac Toe</h1>

      <GameInfo playerTurn={playerTurn} playerNames={playerNames} gameState={gameState} />

      {
        gameState == GAME_STATUS.PREPARING ?
          (
            <NamePicker playerNames={playerNames} setPlayerNames={setPlayerNames} />
          ) :
          (
            <Board tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass} />
          )
      }
      <div className='button-container'>
        <button className='reset-button' onClick={() => reset()}>Reset</button>
        {
          gameState == GAME_STATUS.PREPARING ?
            (
              <button style={{ background: "rgb(0, 150, 0)" }} className='menu-button' onClick={() => { newGame() }}>Start</button>
            ) :
            (
              <button className='menu-button' onClick={() => { newGame() }}>New Game</button>
            )
        }
      </div>
    </div>
  )
}

export default TicTacToe
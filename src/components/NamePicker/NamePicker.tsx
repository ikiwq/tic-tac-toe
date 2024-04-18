import React, { ChangeEvent } from 'react'
import "./NamePicker.css"
import Cross from "../../assets/cross.png"
import Circle from "../../assets/circle.png"
import { PlayerNamesObject } from '../types'

type Props = {
  playerNames: PlayerNamesObject
  setPlayerNames: Function
}

const NamePicker = (props: Props) => {

  const changePlayer1 = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    props.setPlayerNames({
      ...props.playerNames,
      player1: value,
    })
  }

  const changePlayer2 = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    props.setPlayerNames({
      ...props.playerNames,
      player2: value,
    })
  }

  return (
    <div className='name-picker-container'>
      <div className='name-picker'>
        <img src={Cross} width={100} />
        <input
          type='text'
          value={props.playerNames.player1}
          onInput={e => changePlayer1(e as ChangeEvent<HTMLInputElement>)}
        />
      </div>
      <div className='name-picker'>
        <img src={Circle} width={100} />
        <input
          type='text'
          value={props.playerNames.player2}
          onInput={e => changePlayer2(e as ChangeEvent<HTMLInputElement>)}
        />
      </div>
    </div>
  )
}

export default NamePicker
import { GAME_STATUS } from "../constanstx"

export type PlayerNamesObject = {
    player1: string, player2: string
}

export type TicTacToeMatch = {
    player1: string
    player2: string
    gameState: GAME_STATUS
}
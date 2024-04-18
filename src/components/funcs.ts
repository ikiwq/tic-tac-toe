import { GAME_STATUS, PLAYER_X, WIN_COMBINATIONS } from "../constanstx";
import { PlayerNamesObject, TicTacToeMatch } from "./types";

export const checkForPlayerWin = (tiles: Array<String>, playerNames: PlayerNamesObject, setGameState: Function, setStrikeClass: Function) => {
    for (const { combo, strikeClass } of WIN_COMBINATIONS) {
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];

        if (
            tileValue1 !== null &&
            tileValue1 === tileValue2 &&
            tileValue1 === tileValue3
        ) {
            setStrikeClass(strikeClass);
            if (tileValue1 === PLAYER_X) {
                setGameState(GAME_STATUS.PLAYER_1_WIN);
                addToMatchHistory(GAME_STATUS.PLAYER_1_WIN, playerNames);
            } else {
                setGameState(GAME_STATUS.PLAYER_2_WIN);
                addToMatchHistory(GAME_STATUS.PLAYER_2_WIN, playerNames);
            }
            return;
        }

        const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
        if (areAllTilesFilledIn) {
            setGameState(GAME_STATUS.DRAW);
            addToMatchHistory(GAME_STATUS.DRAW, playerNames);
        }
    }
}

const addToMatchHistory = (gameState: GAME_STATUS, playerNames: PlayerNamesObject) => {
    const historyAsString = localStorage.getItem("history") || "[]";
    const history: Array<TicTacToeMatch> = JSON.parse(historyAsString);

    const match: TicTacToeMatch = {
        player1: playerNames.player1,
        player2: playerNames.player2,
        gameState: gameState
    }

    history.unshift(match);

    localStorage.setItem("history", JSON.stringify(history));
}

export const getMatchHistory = (): Array<TicTacToeMatch> => {
    const historyAsString = localStorage.getItem("history") || "[]";
    const history: Array<TicTacToeMatch> = JSON.parse(historyAsString);
    return history;
}
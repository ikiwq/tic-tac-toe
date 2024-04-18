import React, { useEffect, useState } from 'react'
import "./LeaderBoard.css"
import { getMatchHistory } from '../funcs';
import { TicTacToeMatch } from '../types';
import { GAME_STATUS } from '../../constanstx';

type Props = {
    open: boolean;
}

const LeaderBoard = (props: Props) => {
    const [playerLeaderBoard, setPlayerLeaderBoard] = useState<[string, number][]>([]);

    const reloadMatchHistory = () => {
        const matchHistory = getMatchHistory();

        const leaderBoard: { [key: string]: number } = {};

        matchHistory.map(match => {
            if (match.gameState == GAME_STATUS.PLAYER_1_WIN) {
                leaderBoard[match.player1] = leaderBoard[match.player1] === undefined ? 1 : leaderBoard[match.player1] + 1;
            }
            if (match.gameState == GAME_STATUS.PLAYER_2_WIN) {
                leaderBoard[match.player2] = leaderBoard[match.player2] === undefined ? 1 : leaderBoard[match.player2] + 1;
            }
        })
        const keyValueArray = Object.entries(leaderBoard);

        keyValueArray.sort((a, b) => b[1] - a[1]);

        setPlayerLeaderBoard(keyValueArray);
    }

    useEffect(() => {
        reloadMatchHistory()
    }, []);

    useEffect(() => {
        console.log("pl" + playerLeaderBoard)
    }, [playerLeaderBoard]);

    return (
        props.open ? (
            <div className='leader-board'>
                <h1 className='leader-board-title'>Leader Board</h1>
                <div className='user-list'>
                    {
                        playerLeaderBoard.map((entry, index) => (
                            <div key={"leader-" + index}>
                                <p className='user-name'>{(index + 1) + ". " + entry[0]}</p>
                                <p className='user-name'>{entry[1]} <span className='user-win'>wins</span></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        ) :
        (<p>X</p>)
    )
}

export default LeaderBoard
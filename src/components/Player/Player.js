import React from 'react';
import './Player.css';

const Player = props => (
    <>
        {(props.admin && props.player.isActive && props.roundState)
            ? <button className="player playerButton" playerinfo={props.player} onClick={event => { props.handle_win(event) }}>{
                props.player.player === null
                    ? ""
                    : props.player.player
            }</button>
            : <div className={props.player.player === undefined && props.player.roundNum === 1 ? "player bye" : "player"}>{
                (props.player.player === undefined && props.player.roundNum === 1)
                    ? "Bye"
                    : props.player.player === null
                        ? ""
                        : props.player.player
            }</div>
        }
    </>
)

export default Player;
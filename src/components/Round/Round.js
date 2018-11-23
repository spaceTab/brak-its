import React from 'react';
import './Round.css';

const Tournament = props => (
    <div className="round">
        {props.roundInfo.map((player, i) => (
            <div key={i} className="playerContainer">
                <div className="player">{
                    player.player === false 
                    ? "" 
                    : player.player === null
                        ? "BYE"
                        : player.player
                    }
                </div>
            </div>
        ))}
    </div>
)

export default Tournament;
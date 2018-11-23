import React from 'react';
import Round from '../Round';
import './Tournament.css';

const Tournament = props => (
    <>
    <div className="row">
        <div className="col s12 tournamentViewport">
            <div className="tournamentDisplay">
                {props.tourneyInfo.map(round => (
                    <Round key={`roundSize${round.length}`} roundInfo={round} />
                ))}
            </div>
        </div>
    </div>
    </>
)

export default Tournament;
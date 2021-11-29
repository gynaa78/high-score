import React from 'react'

const ScoresTable = ({name, scores}) => {
    return (
      <div className="scores-table">
        <table>
          <thead>
            <tr>
              <th colSpan="2" className="table-title">
                HIGH SCORES: {name}
              </th>
            </tr>
          </thead>
          <TableBody scores={scores} />
        </table>
      </div>
    );
}

const TableBody = ({scores}) => {
    return (
        <tbody>
            {scores.map(({n, s}, index) => (
                <PlayerScores key={index} name={n} score={s} />
            )
            )}
               
        </tbody>
    );
}

const PlayerScores = ({ name, score }) => {
  return (
    <tr>
      <td className="name">{name}</td>
      <td className="score">{score}</td>
    </tr>
  );
};

export default ScoresTable

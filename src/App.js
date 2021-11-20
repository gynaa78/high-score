import './App.css';
import allCountryScores from './Score'


function App() {
console.log(`allCountryScores`, allCountryScores)
  return (
    <table className="table">
      <thead>
        {" "}
        <tr>
          <th>Country</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {allCountryScores.map((country) => (
          <tr>
            <td>{country.name}</td>
            <td>{country.scores[0].n}</td>
            <td>{country.scores[0].s}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;

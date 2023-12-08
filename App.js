import herbe from './herbe.svg';
import éol from './éol.svg';
import cloud from './cloud.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={herbe} className="App-konami100" alt="herbe" />
        <img src={herbe} className="App-konami101" alt="herbe" />
        <img src={herbe} className="App-konami102" alt="herbe" />
        <img src={éol} className="App-konami200" alt="éol" />
        <img src={éol} className="App-konami201" alt="éol" />
        <img src={cloud} className="App-konami300" alt="cloud" />
        <img src={cloud} className="App-konami301" alt="cloud" />
        <img src={cloud} className="App-konami302" alt="cloud" />
        <p className="text-konami">Utiliser le Konami Code pour trouver cette page, c'est bien, mais le vrai code à suivre est celui qui privilégie la durabilité et le respect de l'environnement.</p>

      </header>
    </div>
  );
}

export default App;

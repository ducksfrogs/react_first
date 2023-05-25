import './App.css';
import Note from './Note';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Note counter={3} word={"Component"} />
        <Note counter={2} word={"hoge"} />
        <Note counter={3} word={"Component"} />
      </header>
    </div>
  );
}

export default App;

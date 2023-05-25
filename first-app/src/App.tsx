import './App.css';
import Note from './Note';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Note  word={"Component"} />
        <Note  word={"hoge"} />
        <Note  word={"Component"} />
      </header>
    </div>
  );
}

export default App;

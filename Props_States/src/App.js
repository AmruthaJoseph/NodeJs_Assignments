import './App.css';
import Welcome from './components/class-comp/Welcome';
import ParentComponent from './components/function-comp/ParentComponent';

function App() {
  return (
    <div className="App">
      <Welcome />
      <ParentComponent />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div className="Body">
      <Navbar title='TextEditor' about='About'/>
      <div className="container my-3">
        <TextForm heading='Enter Text to Edit'/>
      </div>
    </div>
  );
}

export default App;

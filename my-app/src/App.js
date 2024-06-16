import './App.css';
import {getDatabase,ref,set} from "firebase/database";
import {app} from './firebase'

const db =getDatabase(app);

function App() {

  const putData = () => {
    set(ref(db,"user/anchal"),{
      id:1,
      name: "Anchal",
      age: 24,
    });
  };

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;

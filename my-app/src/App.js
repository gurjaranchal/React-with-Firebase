import './App.css';
// import {getDatabase,ref,set} from "firebase/database";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from './firebase'
import SignupPage from './pages/signup';
// const db =getDatabase(app);

const auth = getAuth(app);

function App() {

  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "anchalg123@gmail.com",
      "anchal123"
    ).then((value) => console.log(value));
  };

  // const putData = () => {
  //   set(ref(db,"user/anchal"),{
  //     id:1,
  //     name: "Anchal",
  //     age: 24,
  //   });
  // };

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <button onClick={signupUser}>Create User</button>
      <SignupPage/>
    </div>
  );
}

export default App;

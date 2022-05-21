import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  const onRequest = () => {
    axios.post("https://next-express-swart.vercel.app/api/login",{},{withCredentials: true}).then((res) => {
      console.log("res", res);
    });
  };

  const onSendBack = () => {
    axios.get("https://next-express-swart.vercel.app/api/get", { withCredentials: true }).then((res) => {
      console.log("res", res);
    });
  };
  return (
    <div className="App">
      <button onClick={onRequest}>Login</button>
      <button onClick={onSendBack}>Get Some data</button>
    </div>
  );
}

export default App;

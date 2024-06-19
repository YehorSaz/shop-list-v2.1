import './App.css';
import {Footer, Header, ShopList} from "./components";
import {useState} from "react";

function App() {

    window.scrollTo(0,1);

    const [trigger, setTrigger] = useState(false);

  return (
    <div className="App">
        <Header/>
        <ShopList/>
        <Footer trigger={trigger} setTrigger={setTrigger}/>
    </div>
  );
}

export default App;

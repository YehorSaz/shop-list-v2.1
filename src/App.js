import './App.css';
import {Footer, Header, ShopList} from "./components";
import {useState, useRef} from "react";

function App() {

    const [trigger, setTrigger] = useState(false);

    const myRef = useRef();

  return (
    <div className="App" ref={myRef.current.scrollTo(0,0)}>
        <Header/>
        <ShopList/>
        <Footer trigger={trigger} setTrigger={setTrigger}/>
    </div>
  );
}

export default App;

import './App.css';
import {Footer, Header, ShopList} from "./components";
import {useState} from "react";

function App() {

    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

  return (
    <div className="App">
        <Header/>
        <ShopList/>
        <Footer trigger={trigger} setTrigger={setTrigger}/>
    </div>
  );
}

export default App;

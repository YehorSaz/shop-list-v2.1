import './App.css';
import {Footer, Header, ShopList} from "./components";
import {useState, useEffect} from "react";

function App() {

    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, []);


  return (
    <div className={"App"}>
        <Header/>
        <ShopList/>
        <Footer trigger={trigger} setTrigger={setTrigger}/>
    </div>
  );
}

export default App;

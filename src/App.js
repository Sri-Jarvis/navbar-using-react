import './App.css';
import NavBar from "./components/NavBar";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
    let Component;
    switch (window.location.pathname) {
        case "/":
            Component = <Home/>;
            break;
        case "/pricing":
            Component = <Pricing/>;
            break;
        case "/about":
            Component = <About/>;
            break;
        default :
            break;
    }
    return (
        <>
            <NavBar/>
            <div className="container">
                {Component}
            </div>
        </>
    );
}

export default App;

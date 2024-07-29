import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Provider } from "react-redux";
import './components/Styling/css/style.css'
import { About } from "./components/About/About";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";
import SandwichMenu from "./components/Sandwitchmenu/SandwitchMenu";
import { Banner } from "./components/Banner/Banner";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <SandwichMenu />
      </header>
    </div>
    <Routes>
       <Route path="/" element={<Home/>}/>

       <Route path="/go" element={<Banner/>}>

              <Route path="About" element={<About/>}/>
              <Route path="Portfolio" element={<Portfolio/>}/>
              <Route path="Blog" element={<Blog/>}/>
       </Route>
       <Route path="/Contact" element={<Contact/>}/>
    </Routes>
   
    </BrowserRouter>
    </Provider>
  );
}

export default App;

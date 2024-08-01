import { BrowserRouter,Route,Routes, useLocation } from "react-router-dom";
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
import { OneBlog } from "./components/Blog/OneBlog/OneBlog";
import { SecondBlog } from "./components/Blog/OneBlog/SecondBlog";
import { useEffect, useState } from "react";


function App() {
  // const location=useLocation()
  const [path,setPath]=useState('')


    const pageName=(link)=>{
        switch(link){
            case '/go/Blog':
              return 'BLOG'
              break
            case '/go/About':
              return "ABOUT"
              break
            case '/go/Portfolio':
              return "PORTFOLIO"
            case 'Contact':
              return "CONTACT"
            case 'Home':
              return "HOME"
        }
    }

  // useEffect(()=>{
  //   setPath(pageName(location.pathname))
  // },[])

  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <SandwichMenu setPath={setPath}/>
      </header>
    </div>
    <Routes>
       <Route path="/" element={<Home/>}/>

       <Route path="/go" element={<Banner path={path}/>}>

              <Route path="About" element={<About setPath={setPath}/>}/>
              <Route path="Portfolio" element={<Portfolio setPath={setPath}/>}/>
              <Route path="Blog" element={<Blog  setPath={setPath}/>}/>
       </Route>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Cybersecurity" element={<OneBlog/>}/>
       <Route path="/OWASP" element={<SecondBlog />}/>
    </Routes>
   
    </BrowserRouter>
    </Provider>
  );
}

export default App;

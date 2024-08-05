import React,{useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import cyber from '../Styling/img/guerrillabuzz-SYofhg_IX3A-unsplash.jpg'
import owasp from '../Styling/img/OWASP.webp'

export const Blog = ({setPath}) => {
        const navigate=useNavigate()
          const location=useLocation()
//   const [path,setPath]=useState('')


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

useEffect(()=>{
  setPath(pageName(location.pathname))
},[])
  return (
    <>
     <section id="portfolio" class="py-5">

<div class="container">
    <div class="row">
    <div class="col-12">
        <h1 class="text-color-prim text-center">LATEST POSTS</h1>
    </div>
    <div class="col-12 text-center text-white">
        <h4 class="description">Here we share some valuable knowledge</h4>
    </div>
    </div>
    <div class="row mt-5">
    <div class="col-md-6 p-3 flexCol">
        
            <img src={cyber} alt="link to work" style={{width: "100%",height:200,borderRadius: "10px"}}/>
            <p class="text-white">In today's interconnected world, cybersecurity has become a critical concern for individuals, businesses, and governments alike. As we increasingly rely on digital technologies for communication, commerce, and the storage of sensitive information, the risks associated with cyber threats have grown exponentially. </p>
            <button class="transparentButton" onClick={()=>navigate('/Cybersecurity')}>click for more</button>
    </div>
    <div class="col-md-6 p-3 flexCol">
        
            <img src={owasp} alt="link to work" style={{width: "100%",height:200,borderRadius: "10px"}}/>
            <p class="text-white">The Open Web Application Security Project (OWASP) is a globally recognized nonprofit organization dedicated to improving the security of software. Established in 2001, OWASP has become a crucial resource for developers, security professionals, and organizations looking to enhance the security of their web applications.</p>
            <button class="transparentButton" onClick={()=>navigate('/OWASP')}>click for more</button>
    </div>
    {/* <div class="col-md-6 p-3 flexCol">
        
            <img src="https://slimhamdi.net/istanbul/demos/img/projects/project-3.jpg" alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
            <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia atque fuga qui molestias architecto, deleniti amet aut provident. Commodi, possimus natus? Neque iure ipsa eveniet, odio possimus id quasi! A!</p>
            <button class="btn btn-outline-primary">click for more</button>
    </div>
    <div class="col-md-6 p-3 flexCol">
        
            <img src="https://slimhamdi.net/istanbul/demos/img/projects/project-4.jpg" alt="link to work" style={{width: "100%",borderRadius: "10px"}}/>
            <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia atque fuga qui molestias architecto, deleniti amet aut provident. Commodi, possimus natus? Neque iure ipsa eveniet, odio possimus id quasi! A!</p>
            <button class="btn btn-outline-primary">click for more</button>
    </div> */}

    </div>
</div>

</section>
    </>
  )
}

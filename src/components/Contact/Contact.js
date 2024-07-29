import React from 'react'

export const Contact = () => {
  return (
    <section id="portfolio" className="py-5" style={{height:"100vh"}}>

    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="text-color-prim text-center">Contact Us</h1>
            </div>
            <div className="col-12 text-center text-white">
                <h4 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
            </div>
        <div className="row">
     <div className="col-md-4 flexCol">
       <div className="flexCol mt-4">
        <div className="text-white">Name</div>
        <div className="flexRowCenter mt-2">
            <div className="icon-color mr-2"><i className="fa-regular fa-user"></i></div>
            <div className="text-white">ANAS BENOMAR</div>
        </div>
       </div>

       <div className="flexCol mt-4">
        <div className="text-white">Email</div>
        <div className="flexRowCenter mt-2 ">
            <div className="icon-color mr-2"><i className="fa-regular fa-envelope"></i></div>
            <div className="text-white">anasscybersec@gmail.com</div>
        </div>
       </div>

       <div className="flexCol mt-4">
        <div className="text-white">Phone</div>
        <div className="flexRowCenter mt-2">
            <div className="icon-color mr-2"><i className="fa-solid fa-phone"></i></div>
            <div className="text-white">0611208422</div>
        </div>
       </div>

       <div className="flexCol mt-4">
        <div className="text-white">Social Links</div>
        <div className="flexRowCenter mt-2">
            <div className="icon-color mr-2"><i className="fa-solid fa-globe"></i></div>
            <div className="text-white">info</div>
        </div>
       </div>



 
     </div>

     <div className="col-md-8">
        <h5 className="text-white m-4">If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly. </h5>
        <form style={{width:"90%"}}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label contact-form-label">From</label>
                <input type="email" className="form-control form-control-lg contact-form-input" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>

              <div className="mb-3">
                <label for="subject" className="form-label contact-form-label">Subject</label>
                <input type="email" className="form-control form-control-lg contact-form-input" id="subject" placeholder="Enter your text here" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label contact-form-label">Example textarea</label>
                <textarea className="form-control form-control-lg contact-form-input" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <div className="mb-3">
                <button className="btn btn-outline-primary">Submit</button>
              </div>
         </form>
     </div>
    
        </div>
        </div>
 

</section>
  )
}

import React from 'react';
import rocket2 from '../assets/rocket2.png'


export default function Classes() {

 return (
   <div> 
     <div id= "classes" style={{background:'#FABb99 ', height:'100vh',display:'flex', alignItems:'center', justifyContent:'center', paddingLeft: 300,paddingRight:300,}}>
      <div style={{height: 420, padding:30, backgroundColor: '#fff', borderRadius: 30, opacity: .9, display: 'flex', flexDirection: ' row', boxShadow: " 1px 3px 3px rgba(0,0,0,0.2)"}}>
    
          <div style={{width: 300,display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems:'center'}}>
                  <h2 style={{fontWeight: 'bold',fontSize: 40 }}> Get Started </h2>
                    <p style={{color: '#c2c2c2', fontSize: 20, marginTop: -25}}>leave us a message.</p>
                      <form style={{display: 'flex', flexDirection: 'column'}}
                  action="https://formspree.io/f/mknpqrvg"
                  method="POST"
                >
                  <label>
                    <input style={{ width:200, margin: 5,height: 20,  borderStyle: 'none ', borderBottomStyle:'solid', borderBottomWidth: 1, borderBottomColor: '#0222', padding:5,}} type="text" placeholder='Your name'/>
                  </label>
                  <label>
                    <input style={{ width:200, margin: 5,height: 20,  borderStyle: 'none ', padding:5, borderBottomStyle:'solid', borderBottomWidth: 1, borderBottomColor: '#0222'}} type="text" name="_replyto"placeholder='name@mail.com'/>
                  </label>
                  <label>
                    <textarea style={{width: 200, margin: 5,height: 100,borderStyle: 'none', padding:5, borderBottomStyle:'solid', borderBottomWidth: 1, borderBottomColor: '#0222'}} name="message" placeholder='Type your message here' ></textarea>
                  </label>
                  <button style={{height: 30, borderStyle: 'none', borderRadius: 10, backgroundColor: '#000', color: '#d2d2d2', fontWeight: 'bold', fontSize: 12}} type="submit">Submit</button>
                </form>
            </div>

            <div style={{backgroundColor: '#f9f9f9', height: 400, width: 400, borderRadius: 30, display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <img src={rocket2} alt="learn"  style={{width:400, height: 450, borderRadius: 20,}}/>
            </div>

      </div>
     
     </div>
   </div>
 );
}
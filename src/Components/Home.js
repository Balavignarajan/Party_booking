import React from 'react'
import './Home.css'
import Header from '../Common/Header'
import logo from '../img/home-logo.svg'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

function Home() {
  return (
    <div>
        <div className='head'>
           <Header/>
        </div>
        <div className='home'>
           <div className='home-logo'>
              <img src={logo}/>
           </div>
           {/* homeform */}
           <div className='home-form'> 
                <form>
                  <div className='home-form2'>
                   <h1>GET IN TOUCH</h1>
                   <br></br>
                   <input className='form-row1' type='name' placeholder='Name'/>
                   <input className='form-row2' type='name' placeholder='Phone'/>
                   <br></br>
                   <br></br>
                   <input className='form-row1' type='Email' placeholder='Email'/>
                  
                   <select className='form-row2'>
                     
                    <option>What are you celberating</option>
                    <option value="option1">great celberating</option>
                   </select>
                   
                   <br></br>
                   <br></br>
                   <select className='form-row1'>
                   <option value="option1">Number of People</option>
                   <option value="option1">How many members</option>
                   </select>
                    
                   <select className='form-row22'>
                   <option  value="option1">Locations prefered</option>
                   <option value="option1">Select the location</option>
                   </select>
                   <br></br>
                   <br></br>
                   <input className='form-row1' type='date' placeholder='Tentative Check in'/>

                   <select className='form-row2'>
                   <option value="option1">What is your per person</option>
                   <option value="option1">Select the location</option>
                   </select>

                  <div className='radio-all'>
                   <div className='form-radio'>
                         <div className='head-radio'>
                             <h5>Would you required additional <br></br> assistance for decor/set-ups ? </h5>
                         </div>
                         <div className='radio1'>
                               <input type='radio' name='option'  />
                                 <a>Yes</a>
                         </div>
                        
                         <div className='radio1'>
                               <input type='radio' name='option' />
                               <a>No</a>
                         </div>
                         <div className='radio-input-txt'>
                         <input placeholder='If yes, please specify.' />
                         </div>
                   </div>

                   <div className='form-radio'>
                         <div className='head-radio'>
                             <h5> Your Plan * </h5>
                         </div>
                         <div className='radio1'>
                               <input type='radio' name='option' />
                                 <a>Overnight Stay </a>
                         </div>
                        
                         <div className='radio1'>
                               <input type='radio' name='option' />
                               <a>Day Event</a>
                         </div>
                   </div>
                   </div>

                   <div className='last-txt'>
                           <p>By clicking on submit you agree to our privacy policy</p>
                  </div>

                   <div className='btn-form'> 
                       <button>Request a Quote</button>
                   </div>
                  
                   </div>
                </form>
                
           </div>
        </div>
         
         {/* page2 */}
         <br></br>
           <div className='page2'>
              <Page2/>
           </div>

           {/* page3 */} 
           <br></br>
           <div className='page3'>
               <Page3/>
           </div>

           {/* page4 */}
            <div className='page4'>
                <Page4/>  
            </div>
    </div>
  )
}

export default Home
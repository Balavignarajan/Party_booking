import React from 'react'
import './Page3.css'
import left from '../img/Group 90.svg'
import right from '../img/Group 91.svg'

function Page3() {
  return (
    <div>
        <div className='page3-bg'>
            <br></br>
        <div className='page3-title'>
                <h1>Reunion Picnics And Meets</h1>
                 <br></br>
                 <p>Give your undivided attention to your friends, while we give our attention to details</p>
            </div>

            <div className='page3-logos'>
              <div className='left-logo'>
                 <img src={left}/>
                </div> 

                <div className='left-logo'>
                 <img src={right}/>
                </div> 
                </div> 
        </div>

        <div className='page3-title2'>
                   <h1>Look No Further</h1>
                   <p>Lorem ipsum dolor sit amet consectetur. Pulvinar odio dolor tellus proin.</p>
                </div>
                    <br></br>
                <div className='page3-list1'>
                        <li>Lorem ipsum dolor sit <br></br>amet consectetur. <br></br> Tincidunt fusce felis nec.</li>
                        <div className='bo'>
                       
                       </div>
                        <li>Lorem ipsum dolor sit <br></br>amet consectetur. <br></br> Tincidunt fusce felis nec.</li>    
                </div>
                   
              
                   
                 
                <div className='page3-list1'>
                    <li>Lorem ipsum dolor sit   <br></br>amet consectetur. <br></br> Tincidunt fusce felis nec.</li>
                    <div className='bo'>
                       
                       </div>
                    <li>Lorem ipsum dolor sit <br></br>amet consectetur. <br></br> Tincidunt fusce felis nec.</li>
                </div>

                

    </div>
  )
}

export default Page3
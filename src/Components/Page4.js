import React from 'react'
import './Page4.css'
import img1 from '../img/Rectangle 28.jpg'
import img2 from '../img/Rectangle 29.jpg'
import img3 from '../img/Rectangle 30.jpg'
import img4 from '../img/Rectangle 31.jpg'
import img5 from '../img/Rectangle 32 (1).jpg'
import img6 from '../img/Rectangle 33.jpg'
import img7 from '../img/Rectangle 34.jpg'

function Page4() {
  return (
    <div>
       
       <div className='page4-head'>
             <h1>HERE ARE FEW REASONS TO CELEBRATE..</h1>
       </div>

       <div className='page4-images'>
           <div className='p4-image1'>
                  <img src={img1}/>
           </div>

           <div className='p4-image1'>
                  <img src={img2}/>
           </div>

           <div className='p4-image1'>
                  <img src={img3}/>
           </div>

       </div>
       
       <div className='page4-images'>
           <div className='p4-image1'>
                  <img src={img4}/>
           </div>

           <div className='p4-image2'>
                  <img src={img5}/>
           </div>

       </div>

       <div className='page4-images'>
           <div className='p4-image2'>
                  <img src={img6}/>
           </div>

           <div className='p4-image3'>
                  <img src={img7}/>
           </div>

       </div>

       <div className='page4-images'>
           <div className='p4-image1'>
                  <img src={img1}/>
           </div>

           <div className='p4-image1'>
                  <img src={img2}/>
           </div>

           <div className='p4-image1'>
                  <img src={img3}/>
           </div>

       </div>
       

                <div className='btn-page4'>  
                     <button>Get in Touch</button>
                </div>
                <div className='em'>

                </div>

       </div>
  )
}

export default Page4
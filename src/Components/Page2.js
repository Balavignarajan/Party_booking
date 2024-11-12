import React from 'react'
import './Page2.css'
import p2logo from '../img/p2logo.png'
import page2img from '../img/page2img.jpg'
function Page2() {
  return (
    <div>

        <div className='page2bg'>
           <div className='page2-heading'>
                <h1>50,000 + Families Trusts</h1>
           </div>
        </div>

        <div className='flogo'>
            <img src={p2logo}/>
        </div>

      <div className='page2-mid'>
        <div className="page2-content">
      <p>
        Lorem ipsum dolor sit amet consectetur. <br />
        Fames et ultrices turpis risus eu enim tincidunt. <br />
        Risus commodo morbi dictumst non non at dapibus. <br />
        Donec mattis dignissim non enim accumsan. <br />
        Id luctus egestas mattis dolor fermentum tortor eu urna eu. <br />
        Interdum elit amet tincidunt ipsum lectus orci diam lectus amet. <br />
        Mattis velit tristique euismod bibendum et integer lectus blandit in. <br />
        Molestie dis tincidunt nulla volutpat. <br />
        Neque ut a eget pharetra non at sed aliquam augue. <br />
        Lacus congue morbi ut orci commodo ipsum quam egestas.
      </p>
        
        <br></br>
      <b>
      Lorem ipsum dolor sit amet consectetur. Nisl aliquam <br></br> porttitor neque eget velit eu metus phasellus purus. In id.
      </b>
    </div>

    <div className='page2-img'>
       <img src={page2img}/>
    </div>
    </div>

     <div className='page2-last-txt'>
        <h1>What are you celebrating?</h1>
     </div>

    </div>
  )
}

export default Page2
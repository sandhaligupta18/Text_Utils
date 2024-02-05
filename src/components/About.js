import React,{ useState }  from 'react'
import React, {useState} from 'react'

export default function About() {
const  [setcolor,Changesetcolor]=useState(
  {
    color:'white',
    backgroundColor:'black'
  }
)
const  [settext,Changetext]=useState("Enable light mode")

  const toggleStyle=()=>{
    if(setcolor.color==='white'){
      Changesetcolor({
        color:'black',
        backgroundColor:'white'
      })
      Changetext("Enable dark mode")
    }
    else{
      Changesetcolor({
        color:'white',
        backgroundColor:'black'
      })
      Changetext("Enable light mode")
    }

  }


  const  [setcolors,Changesetcolors]=useState(
    {
      color:'white',
      backgroundColor:'black'
    }
  );

  const  [settexts,Changetexts]=useState("Enable pink mode")
  
    const toggleStyles=()=>{
      if(setcolors.color==='white'){
        Changesetcolors({
          color:'white',
          backgroundColor:'red'
        })
        Changetexts("Enable white mode")
      }
      else{
        Changesetcolors({
          color:'blue',
          backgroundColor:'red'
        })
        Changetexts("Enable pink mode")
      }
  
    }

  return (

    <div className="container" >
        <h1>Accordian</h1>
        <div class="accordion" id="accordionExample" style={setcolor}>
        <div class="accordion-item" style={setcolor}>
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" style={setcolor} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={setcolor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item"  style={setcolor}>
    <h2 class="accordion-header ">
      <button class="accordion-button collapsed" style={setcolor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

</div>
<div><button type="button" class="btn btn-primary my-3" onClick={toggleStyle}>{settext}</button></div>
<div><button type="button" class="btn btn-primary my-3" onClick={toggleStyles}>{settexts}</button></div>
    </div>
    
    
  )

}

import React, { useState } from 'react'
const MainContent = () => {

  const [meam,setmeam] = useState({
    Top_text: "Top text",
    Bottom_text:"Bottom text",
    image : "/src/assets/AI.png"
  })
  return (
    <>
    <form action="" className='form' >
       <div className='form-inputs'>
       <div className='input-1'> 
       
        <label htmlFor="upper-text"><b>Top Text</b></label>
        <input type="text" id="upper-text" placeholder='Enter Upper Text'/>
        </div>
        <div className='input-2'>
        <label htmlFor="bottom-text"><b>Bottom text</b></label>
        <input type="text" id="bottom-text" placeholder='Enter Bottom Text'/>
        </div>
         </div>
    
    <button>Get a new meme image 😶‍🌫️</button>
    </form>
    
    <div className='ai-image'>
      <img  src={meam.image} alt="ai-image" />
      <span className='top'>{meam.Top_text}</span>
      <span className='bottom'>{meam.Bottom_text}</span>
      </div>
    </>

    
  )
}

export default MainContent
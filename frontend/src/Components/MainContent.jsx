import React, { useState } from 'react'
const MainContent = () => {

  const [meam,setmeam] = useState({
    topText: "top text",
    bottomText:"Bottom text",
    image : "/src/assets/AI.png"
  })
  const [allmeme ,setallmeme]  = React.useState([])

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data =>setallmeme(data.data.memes) )
  },[])

  function eventHandeler(event){
   const {value,name} = event.currentTarget;
   setmeam(preMeam => ({
    ...preMeam,
      [name] :value


   }))
  
  }
   function getMemeImage() {
     event.preventDefault();
    let randomImage = Math.floor(Math.random()*allmeme.length)

   let newMeamUrl = allmeme[randomImage].url

   setmeam(preMeam=>({

    ...preMeam,

    image : newMeamUrl

   }))

   }

  
  return (
    <>
    
    <form action="" className='form' >
       <div className='form-inputs'>
       <div className='input-1'> 
       
        <label htmlFor="upper-text"><b>Top Text</b></label>
        <input name="topText" type="text" value={meam.topText} id="upper-text" onChange={eventHandeler} placeholder='Enter Upper Text'/>
        </div>
        <div className='input-2'>
        <label htmlFor="bottom-text"><b>Bottom text</b></label>
        <input name="bottomText" value={meam.bottomText} onChange={eventHandeler} type="text" id="bottom-text" placeholder='Enter Bottom Text'/>
        </div>
         </div>
    
    <button type="button" onClick={getMemeImage}>Get a new meme image 😶‍🌫️</button>
    </form>
    
    <div className='ai-image'>
      <img  src={meam.image} alt="imageUrl" />
      <span className='top'>{meam.topText}</span>
      <span className='bottom'>{meam.bottomText}</span>
      </div>
    </>

    
  )
}

export default MainContent
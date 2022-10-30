import React,{Fragment} from 'react'

const Variables = () => {

    const text1="Buenas Noches"
    let text2="Como estas?"
    const url="https://img1.ak.crunchyroll.com/i/spire2/fa94393539da2579a0079109ba27ff501649905555_main.jpg"


  return (
    
        <Fragment>
            <p>Variables en jsx, {text1},{text2}</p>
            <img src={url} alt= "kingdom"></img>
        </Fragment>
        
    
  )
}

export default Variables
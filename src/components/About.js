import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle]=useState({
        color: 'black',
        backgroundColor:'white'
    })

    const [btnText , setBtnText] = useState("Enable dark mode")

    const toggleStyle =()=>{
        if(myStyle.color=='black'){
            setMyStyle({
                color: 'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setBtnText("Enable Ligth mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark mode")
    }
}
    
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analzse your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This application is basically a text analyser which will help you to play with your text.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>It is completely free to use.</strong> 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatibility
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>It runs in all the Browsers.</strong>
                </div>
                </div>
            </div> 
         </div>
        {/*<div className="container my-3">
         <button onClick={toggleStyle}  type="button" className="btn btn-primary"> {btnText} </button>
        </div> */}
        
    </div>
  )
}

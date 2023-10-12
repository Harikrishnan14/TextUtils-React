import React from 'react'

export default function About(props) {
    
    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'#606060':'white'
    }

  return (
    <>
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b>1. Our Mission</b>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    In this age of information, managing and processing vast amounts of text can become overwhelming.<br></br>
                    <strong> Our mission is simple:</strong> make text management easy, efficient, and enjoyable. Whether you’re a student, a content creator, a programmer, or just someone looking to optimize their digital communications, TextUtils is here for you.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b>2. What We Offer</b>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Text Cleaners : </strong>Remove unnecessary spaces and format your documents.<br></br><br></br>
                    <strong>Transformation Tools : </strong>Convert your text to uppercase or lowercase.<br></br><br></br>
                    <strong>Word Counters & Analyzers : </strong>Dive deep into the semantics and statistics of your content.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <b>3. Why Choose Us</b>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>User-Friendly Interface : </strong>Navigate with ease and get your tasks done faster.<br></br><br></br>
                    <strong>Data Privacy : </strong>We prioritize your privacy. Your texts are never stored, and all processing is done in real-time, ensuring your data remains yours.<br></br><br></br>
                    <strong>Continuous Innovation : </strong>We’re always looking for ways to improve and expand our offerings, driven by user feedback and the latest trends in text-processing.
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

import React from 'react'

export default function LandingPage(props) {

  return (
    <div className="flex-wrapper">
      <div className="content">
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
      </div>
      <div className="footer">
        <button className="quizzical-button" onClick={props.onStart}> BEGIN</button>
      </div>
    </div>
  )
}
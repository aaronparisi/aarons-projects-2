import React, { useEffect, useState } from 'react'
import FooterContainer from '../Footer/FooterContainer'

import emailjs, { init } from 'emailjs-com'
init("user_GjyD0j0dNrlKS9KVIfHed")

const Contact = props => {
  const [inputVals, setInputVals] = useState({
    fromName: '',
    email: '',
    msgBody: ''
  })
  
  const [submitDisabled, setSubmitDisabled] = useState(true)

  useEffect(() => {
    checkSubmitDisable()
  })

  const handleChange = (e) => {
    e.preventDefault()
    
    setInputVals({
      ...inputVals,
      [e.target.id]: e.target.value
    })
  }

  const handleInputBlur = e => {
    e.preventDefault()

    if (e.currentTarget.value === "") {
      e.currentTarget.style=`background-color: #72264c;`
      e.currentTarget.placeholder = `${e.currentTarget.name} is required`
      setSubmitDisabled(true)
    } else {
      e.currentTarget.style=`background-color: #0e6359`

      checkSubmitDisable()
    }
  }

  const checkSubmitDisable = () => {
    if (inputVals.email !== "" && inputVals.fromName !== "" && inputVals.msgBody !== "") {
      setSubmitDisabled(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateId = 'template_auga2g4';
  
    sendFeedback(templateId, { message: inputVals.msgBody, from_name: inputVals.fromName, reply_to: inputVals.email })
  }
  
  const sendFeedback = (templateId, variables) => {
    emailjs.send(
      'service_jfp0y1e', templateId, variables
      ).then(res => {
        setInputVals({ email: ''})
        setInputVals({ fromName: ''})
        setInputVals({ msgBody: ''})
        window.scrollTo(0,0)
        alert("Thanks for contacting me!")
      })
      // Handle errors here however you like, or use a React error boundary
      // .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      .catch(err => alert('Something went wrong, try agian later!'))
  }

  return (
    <div className="contact" data-nav="show" id="contact">
      <h1>Get in touch!</h1>
      <p>I am currently looking for work in the Seattle area, or remotely!</p>
      <form
        id="contact-form-form"
      >
        <input 
          type="text" 
          name="Name" 
          id="fromName"
          value={inputVals.fromName}
          // onChange={e => setFromName(e.currentTarget.value)}
          onChange={e => handleChange(e)}
          onBlur={e => handleInputBlur(e)}
          placeholder="Name"
        />
        <input 
          type="email" 
          name="Email" 
          id="email"
          value={inputVals.email}
          // onChange={e => setEmail(e.currentTarget.value)}
          onChange={e => handleChange(e)}
          onBlur={e => handleInputBlur(e)}
          placeholder="Email"
        />
        <textarea 
          name="Body" 
          id="msgBody" 
          cols="30" 
          rows="10"
          value={inputVals.msgBody}
          // onChange={e => setMsgBody(e.currentTarget.value)}
          onChange={e => handleChange(e)}
          onBlur={e => handleInputBlur(e)}
          placeholder="Say hi..."
        ></textarea>
        <button 
          className="email-button" 
          onClick={e => handleSubmit(e)} 
          disabled={submitDisabled}
        >
          <h2>Send Email</h2>
        </button>
      </form>

      <FooterContainer />
    </div>
  )
}

export default Contact
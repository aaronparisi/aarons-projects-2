import React, { useState } from 'react'
import emailjs, { init } from 'emailjs-com'
init("user_GjyD0j0dNrlKS9KVIfHed")

const Contact = props => {
  const [fromName, setFromName] = useState("")
  const [email, setEmail] = useState("")
  const [msgBody, setMsgBody] = useState("")
  const [submitDisabled, setSubmitDisabled] = useState(true)

  const handleInputBlur = e => {
    e.preventDefault()

    if (e.currentTarget.value === "") {
      e.currentTarget.style=`background-color: #4b1f1b;`
      e.currentTarget.placeholder = `${e.currentTarget.name} is required`
      setSubmitDisabled(true)
    } else {
      e.currentTarget.style=`background-color: #164432`

      if (email !== "" && fromName !== "" && msgBody !== "") {
        setSubmitDisabled(false)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateId = 'template_auga2g4';
  
    sendFeedback(templateId, { message: msgBody, from_name: fromName, reply_to: email })
  }
  
  const sendFeedback = (templateId, variables) => {
    emailjs.send(
      'service_jfp0y1e', templateId, variables
      ).then(res => {
        setEmail("")
        setFromName("")
        setMsgBody("")
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
          id="Name"
          value={fromName}
          onChange={e => setFromName(e.currentTarget.value)}
          onBlur={e => handleInputBlur(e)}
          placeholder="Name"
        />
        <input 
          type="email" 
          name="Email" 
          id="Email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          onBlur={e => handleInputBlur(e)}
          placeholder="Email"
        />
        <textarea 
          name="Message" 
          id="Message" 
          cols="30" 
          rows="10"
          value={msgBody}
          onChange={e => setMsgBody(e.currentTarget.value)}
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
    </div>
  )
}

export default Contact
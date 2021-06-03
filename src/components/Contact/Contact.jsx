import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import { history } from '../../index'

const Contact = props => {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    history.push('/')
    alert('form submitted!')
  }

  return (
    <React.Fragment >
      <Helmet >
        <title>Contact</title>
      </Helmet>
      

      <form
        onSubmit={ e => handleSubmit(e) }
      >
        <fieldset
        >
          <legend>Get in touch!</legend>
          <input
            type="text" 
            name="name" 
            id="name"
            value={name}
            placeholder="Name"
            onChange={ e => setName(e.currentTarget.value) }
          />

          <textarea 
            name="message" 
            id="message" 
            cols="30" 
            rows="10"
            value={message}
            placeholder="Message"
            onChange={ e => setMessage(e.currentTarget.value) }
          >
          </textarea>
          <input type="submit" value="Send"/>
        </fieldset>

      </form>
    </React.Fragment>
  )
}

export default Contact
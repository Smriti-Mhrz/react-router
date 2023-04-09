import React from 'react'

export default function contact() {
  return (
    <div className='contact'>
      <h3>Contact Us</h3>
      <form>
        <label>
            <span>Your Email:</span>
            <input type='email' name='email' required/>
        </label>
        <label>
            <span>Your message</span>
            <textarea name='message' required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

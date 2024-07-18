import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contactus = () => {   
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_qvgsrhb', 'template_0qvgoqo', form.current, {
                publicKey: 'y0wV3mgBbXI3hgTn3',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire("Submitted!","Your Email Has Been Sent.","success");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
  return (
  <>
  <div className='content'>
            <form ref={form} onSubmit={sendEmail} id="contact_form" name="contact_form" method="post" >
                <div class="mb-3">
                    <label for="email_addr">Email address</label>
                    <input type="email" required maxlength="50" class="form-control"
                        id="email_addr" name="from_email" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="name_input">Name</label>
                    <input type="text" required maxlength="50" class="form-control"
                        id="name_input" name="from_name" placeholder="Name"/>
                </div>
                <div class="mb-3">
                    <label for="phone_input">Phone</label>
                    <input type="tel" required maxlength="50" class="form-control"
                        id="phone_input" name="Phone" placeholder="Phone"/>
                </div>
                <div class="mb-3">
                    <label for="message">Message</label>
                    <textarea class="form-control" id="message" name="message" rows="3"></textarea>
                </div>
                <div class="my-4">
                    <div class="g-recaptcha" data-sitekey="6LchOyEUAAAAAPo9l0WmIgFkGu5D6Gyq-MjsIHS1"></div>
                </div>
                <button type="submit" class="btn btn-primary px-4">Send</button>
            </form>
            </div>

  </>
  )
}

export default Contactus
'use client'
import { useState } from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import "../Styles/ContactPage.css"
import { useTranslation } from "react-i18next";
function ContactPage(){
  const { t, i18n } = useTranslation();
    const [formStatus, setFormStatus] = useState(t('Send'))
    const form = useRef();

    const onSubmit = (e) => {
        if(formStatus==='Thanks for your feedback'){
          e.target.reset()
          setFormStatus(t('Send'))
        }
        else{
          e.preventDefault()
          setFormStatus(t('Submitting...'))
          
         
         
          emailjs.sendForm("service_q3bsonc","template_40jiv6q", form.current, 'pfLh9sxMAF_ZV9wtT')
          .then((result) => {
              alert('success you email was sent successfully')
          }, (error) => {
              alert(error.message)
          })
          setFormStatus(t('Thanks for your feedback'))
          
        }
          
        
    }
    return(
      <div>
      <Container fluid="xxl" className='CPT'>
          <div className="CPTTitle">
            {t("Contact us")}
            
            <hr className='lineSt'/>
          </div>
          
          <div className='CPTdesc'>
          {t("Here you can send us your feedback, problems, sujessions and anything you want to tell us about feel free and write what ever you want to say we will read it later.")}
            
          </div>
        </Container>
      <div className="container-xxl mt-5 main-ctp"  style={{height:"fit-content"}}>
        

      <h2 className="mb-3">{t("Please feel free to give your feedback:")}</h2>
      <form ref={form} onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
          {t("Name")}
            
          </label>
          <input className="form-control" type="text" name="name" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="subject">
          {t("subject")}
            
          </label>
          <input className="form-control" type="text" name="subject" id="subject" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
          {t("Email")}
            
          </label>
          <input className="form-control" type="email" name="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
          {t("Message")}
            
          </label>
          <textarea className="form-control" name="message" id="message" required style={{height:"100px", padding:'1.5em'}}/>
        </div>
        <button className="btn btn-danger" type="submit" value='Send'>
          {formStatus}
        </button>
      </form>
    </div>
    </div>
    );
}

export default ContactPage;
import {ElementRef, FormEvent, useRef, useState} from "react";
import emailjs from "@emailjs/browser";

type FormInfoType = {
  message: null | string,
  error: boolean
}

export const useContacts = () => {
  const defaultFormInfo = { message: null, error: false }
  const formRef = useRef<ElementRef<'form'>>(null);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false)
  const [formInfo, setFormInfo] = useState<FormInfoType>(defaultFormInfo)
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!formRef.current) return
    setFormInfo(defaultFormInfo)
    setButtonIsDisabled(true)
    emailjs.sendForm('service_59nrloi', 'template_j2x0g1p', formRef.current, 'ZRpAqdMxMWVFZzQAv')
      .then((result) => {
        setFormInfo( { message: `${result.text}: Your message is sent. Thank you!`, error: false } )
        setButtonIsDisabled(false)
        formRef.current?.reset()
        setTimeout(() => {
          setFormInfo(defaultFormInfo)
        }, 5000)
      }, (error) => {
        setFormInfo( { message: error.text, error: true } )
        setTimeout(() => {
          setFormInfo(defaultFormInfo)
        }, 5000)
        setButtonIsDisabled(false)
      } );
  };

  return {formRef, sendEmail, formInfo, buttonIsDisabled}
}
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactF = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.sendForm('service_hwn8jk9', 'template_lwyn0p5', form.current!, 'jd46Hos0ottG2xmYd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 justify-center items-center p-10'>
      <input type="text" placeholder='Enter your full name' name="user_name" className='w-[100%] h-[40px] p-2 border rounded-sm border-gray-400 outline-none'/>
      <input type="email" placeholder='Phone number' name="user_email"  className='w-[100%] h-[40px] p-2 border rounded-sm border-gray-400 outline-none'/>
      <textarea name="message" placeholder='Message' className='w-[100%] p-2 border rounded-sm border-gray-400 outline-none'/>
      <button type="submit" value="Send" className='bg-primary text-white hover:opacity-[0.9] rounded-sm p-[5px] w-[100%]'>Send</button>
    </form>
    </div>
  )
}

export default ContactF
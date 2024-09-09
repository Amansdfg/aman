import emailjs from "emailjs-com";
import { useEffect, useState,useRef } from "react";
import classes from "./Contact.module.css"
import AlmatyMap from "./AlmatyMap";
function Contact({theme}) {
    const ref=useRef(null);
    useEffect(()=>{
        function handleIntersection(entries,observer){
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add(classes.animateSection);
                    observer.unobserve(entry.target);
                }
            })
        }
        const observer=new IntersectionObserver(handleIntersection,{threshold:0.3})
        const section=ref.current;
        if(section){
            observer.observe(section);
        }
        return ()=>{
            if(section){
                observer.unobserve(section);
            }
        }
    },[])    
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        setError('');

        if (!validateEmail(formData.reply_to)) {
            setError('Please enter a valid email address.');
            setStatus('');
            return;
        }        
        emailjs.send(
            'service_49wphax',            
            'template_33qpzxc',       
            {
                from_name: formData.from_name,
                reply_to: formData.reply_to,
                message: formData.message,
                to_name: 'Aman',
                to_email: 'kalabaiaman2006@gmail.com',
            },
            '-Nn_ftrt79_ChKiwi'
        )
        .then((response) => {
            console.log('SUCCESS! Creator notified:', response.status, response.text);    
            emailjs.send(
                'service_49wphax',            
                'template_op4huds',     
                {
                    from_name: 'Aman',
                    reply_to: 'kalabaiaman2006@gmail.com',
                    message: `Thank you ${formData.from_name} for your message! We have received your message and will get back to you shortly.`,
                    to_name: formData.from_name,
                    to_email: formData.reply_to,
                },
                '-Nn_ftrt79_ChKiwi' 
            )
            .then((response) => {
                console.log('Confirmation email sent!', response.status, response.text);
                setStatus('Message sent!');
            }, (error) => {
                console.log('Failed to send confirmation email...', error);
                setStatus('Message sent, but failed to send confirmation.');
            });

        }, (error) => {
            console.log('FAILED... Creator notification failed:', error);
            setStatus('Failed to send message.');
        });
    };

    return (
        <section id="contact" ref={ref} className={classes.contactSection}>            
            <div className={classes.head}>
                <span>Contact</span>
                <h2>Contact with me</h2>
            </div>
            <div className={classes.section}>
                <div className={classes.left}>
                    <div className={classes.div}>                    
                        <PhoneIcon isDark={theme}/>
                        <div className={classes.info}>
                            <h1>Phone number</h1>
                            <a>+7 747 539 70 59</a>
                        </div>
                    </div>
                    <div className={classes.div}>
                        <EmailIcon isDark={theme}/>
                        <div className={classes.info}>
                            <h1>Email</h1>
                            <a>kalabaiaman2006@gmail.com</a>
                        </div>
                    </div>
                    <AlmatyMap/>                        
                </div>
                <form className={classes.form} onSubmit={handleSubmit}>
                <span>Name</span>
                <input 
                    type="text"
                    name="from_name"
                    className={classes.input} 
                    placeholder="Your Name" 
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                />
                <span>Email</span>
                <input 
                    type="email"
                    name="reply_to"
                    className={classes.input}
                    placeholder="Your Email" 
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                />
                <span>Message</span>
                <textarea 
                    className={classes.input}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className={classes.btn_send}>Send</button>
                {status && <p>{status}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            </div>        
        </section>
    );
}

export default Contact;

const PhoneIcon = ({isDark}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={isDark?classes.iconDark:classes.icon}>
      <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
      <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
    </svg>
  );
  
  const EmailIcon = ({isDark}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={isDark?classes.iconDark:classes.icon}>
        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
    </svg>
  );
  
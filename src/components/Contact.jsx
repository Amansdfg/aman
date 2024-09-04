import emailjs from "emailjs-com";
import { useState } from "react";
import classes from "./Contact.module.css"
function Contact() {
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
        <section id="contact">
            <div className={classes.head}>
                <span>Contact</span>
                <h2>Contact with me</h2>
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
        </section>
    );
}

export default Contact;

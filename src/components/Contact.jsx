function Contact(){
    return(
        <section id="contact">
            <div className="head">
                <span>Contact</span>
                <h2>Contact with me</h2>
            </div>
            <form className="form">
                <span>Email</span>
                <input className="input" placeholder="Email"/>
                <span>Password</span>
                <textarea className="input" placeholder="Email"/>
                <a><button className="btn-send">Send</button></a>
            </form>
        </section>
    )
}
export default Contact;
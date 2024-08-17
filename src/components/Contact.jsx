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
                <textarea className="input" placeholder="Text"/>
                <a href="mailto:kalabaiaman2006@gmail.com"><input className="btn-send " value="Send" type="button"/></a>            
            </form>
        </section>
    )
}
export default Contact;
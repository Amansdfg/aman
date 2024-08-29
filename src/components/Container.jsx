import img from "../assets/GGG.png";

export default function Container() {
  return (
    <section id="container">
      <div className="item">
        <img className="img" src={img} />                  
          <div className="swipe">
          <h3>JSON Web Token</h3>
            <span>
              JSON Web Token is a proposed Internet standard for creating data
              with optional signature and/or optional encryption whose payload
              holds JSON that asserts some number of claims. The tokens are
              signed either using a private secret or a public/private key.
            </span>          
        </div>
      </div>
      <div className="item">
        <img className="img" src={img} />        
          <div className="swipe">
          <h3>WebSocket</h3>
            <span>
              WebSocket is a computer communications protocol, providing a
              simultaneous two-way communication channel over a single
              Transmission Control Protocol (TCP) connection.
            </span>
          </div>        
      </div>
      <div className="item">
        <img className="img" src={img} />              
          <div className="swipe">
          <h3>Tailwind CSS</h3>
            <span>
              Tailwind CSS is an open-source CSS framework. The main feature of
              this library is that, unlike other CSS frameworks like Bootstrap,
              it does not provide a series of predefined classes for elements
              such as buttons or tables. Instead, it creates a list of "utility"
              CSS classes that can be used to style each element by mixing and
              matching.
            </span>
          </div>        
      </div>
    </section>
  );
}

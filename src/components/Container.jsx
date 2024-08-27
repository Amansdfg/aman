import img from "../assets/GGG.png"
export default function Container(){
    return(
        <section id="container">
        <div class="item">
            <img className="img" src={img}/>
            <div class="swipe">
                <h3>Lorem, ipsum. </h3>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, soluta?</span>
            </div>
        </div>
        <div class="item">
            <img className="img" src={img}/>
            <div class="swipe">
                <h3>Lorem, ipsum.</h3>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, soluta?</span>
            </div>
        </div>
        <div class="item">
            <img className="img" src={img}/>
            <div class="swipe">
                <h3>Lorem, ipsum.</h3>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, soluta?</span>
            </div>
        </div>
    </section>
    )
}
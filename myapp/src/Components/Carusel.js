import "./Carusel.css";
import React from "react";
import TextBlock from "./TextBlock";


function Carusel() {
    return (
        <><h1>Our amazing people</h1><div class="container">
            <div class="faders">
                <div class="left"></div>
                <div class="right"></div>
            </div>
            <div class="items">
                <div class="entry">
                    <p class="name">Vasile Marius</p>
                    <img src="/images/pic1.jpg" alt="Smiling person" />
                    <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
                </div>
                <div class="entry">
                    <p class="name">Popa Dorel</p>
                    <img src="/images/pic2.jpg" alt="Smiling person" />
                    <p class="quote">"This is awesome"</p>
                </div>
                <div class="entry">
                    <p class="name">Gigi Cornel</p>
                    <img src="/images/pic3.jpg" alt="Smiling person" />
                    <p class="quote">"I'm arhitect of the new WTC"</p>
                </div>
                <div class="entry">
                    <p class="name">Alin Zidaru</p>
                    <img src="/images/pic4.jpg" alt="Smiling person" />
                    <p class="quote">"I'm here for you"</p>
                </div>
                <div class="entry">
                    <p class="name">Gheorghe Ion</p>
                    <img src="/images/pic6.jpg" alt="Smiling person" />
                    <p class="quote">"I never stop from my work"</p>
                </div>
                <div class="entry">
                    <p class="name">Popescu Petre</p>
                    <img src="/images/pic5.jpg" alt="Smiling person" />
                    <p class="quote">"Do you need an expert?"</p>
                </div>
                <div class="entry">
                    <p class="name">Vasile Marius</p>
                    <img src="/images/pic1.jpg" alt="Smiling person" />
                    <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
                </div>
                <div class="entry">
                    <p class="name">Popa Dorel</p>
                    <img src="/images/pic2.jpg" alt="Smiling person" />
                    <p class="quote">"This is awesome"</p>
                </div>
                <div class="entry">
                    <p class="name">Gigi Cornel</p>
                    <img src="/images/pic3.jpg" alt="Smiling person" />
                    <p class="quote">"I'm arhitect of the new WTC"</p>
                </div>
                <div class="entry">
                    <p class="name">Alin Zidaru</p>
                    <img src="/images/pic4.jpg" alt="Smiling person" />
                    <p class="quote">"I'm here for you"</p>
                </div>
                <div class="entry">
                    <p class="name">Gheorghe Ion</p>
                    <img src="/images/pic6.jpg" alt="Smiling person" />
                    <p class="quote">"I never stop from my work"</p>
                </div>
                <div class="entry">
                    <p class="name">Popescu Petre</p>
                    <img src="/images/pic5.jpg" alt="Smiling person" />
                    <p class="quote">"Do you need an expert?"</p>
                </div>
            </div>
        </div>
            <TextBlock />
            <TextBlock
                title="Here you can find all you want to do"
                description="Is an enterprise system that manages every aspect of accounting, project management and service for construction, engineering and service firms."
            />
        </>

    )
}

export default Carusel;
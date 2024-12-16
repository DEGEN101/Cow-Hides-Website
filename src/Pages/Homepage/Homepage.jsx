import Footer from "../../Components/Footer/Footer";

import "./Homepage.css"

const Homepage = () => {
    return (
        <>
            <h1>Homepage</h1>

            <Footer> 
                {/* Address Section */}
                <section className="address-section">
                    <h3> Cow Hide Exportation, Ltd </h3>
                    <p> 224 Rua Dos Irmaos Roby, Maputo 1110, Mozambique </p>
                </section>
                
                {/* Links Section */}
                <section className="links-section">
                    <h4> Links </h4>
                    <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </section>
                
                {/* Newsletter Section */}
                <section className="newsletter-section">
                    <h4> Newsletter </h4>

                    <section className="email-section">
                        <p>Enter Your Email Address</p>
                        <p>Submit</p>
                    </section>
                    
                </section>
            </Footer>
        </>
    );
}


export default Homepage;

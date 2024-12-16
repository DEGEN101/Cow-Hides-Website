
import "./Footer.css"

const Footer = ({ children }) => {
    return (
    <>
        <section className="footer-container">
            <section className="information-section">
                {children}
            </section>

            <section className="copyright-section">  
                <p> 2025, Cow Skin Exportation Ltd. All rights reserved </p>
            </section>
        </section>
    </>
    );
}

export default Footer;

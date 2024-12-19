import PackageCard from "../../Components/PackageCard/PackageCard";
import Footer from "../../Components/Footer/Footer";

import "./Homepage.css"

const Homepage = () => {

    const premiumPackageInfo = {
        TITLE: "Premium  Package",
        SUBTITLE: "Export & Import",
        CONTENT: [
            "3000 cow hides",
            "40-ft container", 
            "Average Weight: 8.5 kg per hide for superior resilience",
            "Dedicated Customer Support via Phone for Quick Resolutions",
            "24/7 Email Assistance for Your Convenience"
        ]
    };

    // HTML Code
    return (
        <>
            <h1>Homepage</h1>
            <section className="homepage-centre-container">

                <section className="packages-section">
                    <PackageCard packageInfo={premiumPackageInfo}/>
                </section>
            </section>
            <Footer/>
        </>
    );
}


export default Homepage;

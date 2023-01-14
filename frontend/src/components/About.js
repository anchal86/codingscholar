import AboutArea from "./layouts/AboutArea";
import Team from "./layouts/Team";
import Newsletter from "./layouts/Newsletter";
import MetaData from "./layouts/MetaData";
const About = () =>{
    return(
        <>
            <MetaData title="About Us" canonical="about-us" />
            <div className="jumbotron py-2">
                <h1 className="text-center text-white mt-5 py-3">About Us</h1>
            </div>
            <AboutArea />
            <Team />
            <Newsletter />
        </>
    );
}
export default About;
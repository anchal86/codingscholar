import { Link } from "react-router-dom";
import MetaData from "./layouts/MetaData";
const PrivacyPolicy=()=>{
    return(
        <>
            <MetaData title="Privacy Policy" canonical="privacy-policy" />
            <div className="jumbotron py-2">
                <h1 className="text-center text-white mt-5 py-3">Privacy Policy</h1>
            </div>
            <section className="container mt-5 mb-5">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Privacy Policy for Coding Scholar
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            At Coding Scholar, accessible from codingscholar.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Coding Scholar and how we use it.
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to <Link to="/contact">contact us</Link>.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Log Files
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Coding Scholar follows a standard procedure of using log files. 
                                These files log visitors when they visit websites. 
                                All hosting companies do this and a part of hosting services' analytics. 
                                The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), 
                                date and time stamp, referring/exit pages, and possibly the number of clicks. 
                                These are not linked to any information that is personally identifiable. 
                                The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                                 Our Privacy Policy was created with the help of the <a href="https://www.privacypolicyonline.com/">Privacy Policy Generator</a>.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Cookies and Web Beacons
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            Like any other website, Coding Scholar uses 'cookies'. 
                            These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. 
                            The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. 
                            For more general information on cookies, please read the "What Are Cookies" article on Cookie Consent website.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Google DoubleClick DART Cookie
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            Google is one of a third-party vendor on our site. 
                            It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. 
                            However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">Google Privacy Policy</a>.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Our Advertising Partners
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            Some of advertisers on our site may use cookies and web beacons. 
                            Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. 
                            For easier access, we hyperlinked to their Privacy Policies below. <a href="https://policies.google.com/technologies/ads">Google Ads Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Privacy Policies
                        </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            You may consult this list to find the Privacy Policy for each of the advertising partners of Coding Scholar.
                            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Coding Scholar, 
                            which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                            Note that Coding Scholar has no access to or control over these cookies that are used by third-party advertisers.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            Third Party Privacy Policies
                        </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            Coding Scholar's Privacy Policy does not apply to other advertisers or websites. 
                            Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. 
                            It may include their practices and instructions about how to opt-out of certain options.
                            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, 
                            it can be found at the browsers' respective websites. What Are Cookies?
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            Children's Information
                        </button>
                        </h2>
                        <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            Another part of our priority is adding protection for children while using the internet. 
                            We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                            Coding Scholar does not knowingly collect any Personal Identifiable Information from children under the age of 13. 
                            If you think that your child provided this kind of information on our website,
                            we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                            Online Privacy Policy Only
                        </button>
                        </h2>
                        <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Coding Scholar. 
                            This policy is not applicable to any information collected offline or via channels other than this website.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                            Consent
                        </button>
                        </h2>
                        <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            By using our website, you hereby consent to our Privacy Policy and agree to its <Link to="/terms-conditions">Terms and Conditions</Link>.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PrivacyPolicy;
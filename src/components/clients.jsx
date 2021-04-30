import logo1 from "../images/client/logo1.png"
import logo2 from "../images/client/logo2.png"
import logo3 from "../images/client/logo3.png"
import logo4 from "../images/client/logo4.png"
import logo5 from "../images/client/logo5.jpg"
import logo6 from "../images/client/logo6.png"
import logo7 from "../images/client/logo7.webp"
import logo8 from "../images/client/logo8.svg"
import logo9 from "../images/client/logo9.svg"
import logo10 from "../images/client/logo10.png"
import logo11 from "../images/client/logo11.png"
import logo13 from "../images/client/logo13.png"
import logo14 from "../images/client/logo14.jpg"
import logo15 from "../images/client/logo15.png"
import logo17 from "../images/client/logo17.jpg"
import logo18 from "../images/client/logo18.png"
import logo25 from "../images/client/logo25.png"
import logo20 from "../images/client/logo20.png"
import logo21 from "../images/client/logo21.png"
import logo22 from "../images/client/logo22.png"
import logo23 from "../images/client/logo23.png"
import logo24 from "../images/client/logo24.png"



const Clients = () => {
    return ( 
        <div class="flat-row clients pad-top20px pad-bottom50px">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="flat-clients  pad-top20px" data-item="6" data-nav="false" data-dots="false"
                            data-auto="true">
                            <div class="client-featured"style={{ backgroundColor: "grey"}}>
                                <h1>Clients</h1>
                                <img src={logo22} alt="images"/>
                                <img src={logo2} alt="images"/>
                                <img src={logo13} alt="images"/>
                                <img src={logo18} alt="images"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Clients;

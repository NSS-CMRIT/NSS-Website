import Nav from "./components/Nav/Nav";
import HomeNav from "./components/HomeNav/HomeNav";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import Awards from "./components/Awards/Awards";
import Team from "./components/Team/Team";
import Camp from "./components/Camp/Camp";
import BlooDonors from "./components/BlooDonors/BlooDonors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donors from "./components/Donors/Donors";
import Contact from "./components/Contact/Contact";
import Coord from "./components/coordinators/Coord";
import Events from "./components/events/Events";
import Gallery from "./components/Gallery/Gallery";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Carousel />
        <HomeNav />
        <Switch>
          <Route path="/team">
            <Team />
          </Route>

          <Route path="/2021">
            <Team />
            <Coord
              batch="2021"
              t1img="https://www.w3schools.com/css/paris.jpg"
              t1title="Card title"
            />
          </Route>

          <Route path="/photos"> <Gallery />
    </Route>

          <Route path="/special-events">
            <Camp />
          </Route>

          <Route path="/bloodDonors">
            <BlooDonors />
          </Route>

          {/* <Route path="/o">
            <BlooDonors />
            <Donors
              type="O+ve"
              src="https://cmritonline.ac.in/wp-content/uploads/2021/09/Screenshot-17-1024x501-1.png"
            />
          </Route> */}

          <Route path="/awards">
            <Awards />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/cevent">
            <Events
              text={
                <div className="row">
                  <h4 className="left">2021 - 2022</h4>
                  <ul>
                   <li  className="a" >BATHUKAMMA SANDHADI 29/09/22 TO 01/10/22</li>
                   <li className="a" >NSS DAY 24/09/22</li>
                   <li className="a" >KANIKA GANESH DISTRIBUTION 31/08/22</li>
                   <li className="a" >INDEPENDENCE DAY CELEBRATION 15/08/22</li>
                   <li className="a" >INTERNATIONAL YOGA DAY 23/06/22</li>
                   <li className="a" >FATHER'S DAY 18/06/22</li>
                   <li className="a" >PLANTATION DRIVE 04/06/22</li>
                   <li className="a" >CLEAN AND GREEN 03/06/22</li>
                   <li className="a" >INTERNATIONAL BIODIVERSITY DAY 22/05/22</li>
                   <li className="a" >AROGYAM AVAGAHANA ABHIVRUDHI 11/05/22</li>
                   <li className="a" >MOTHER'S DAY 07/05/22</li>
                   <li className="a" >UGADI CELEBRATION 01/04/22</li>
                   <li className="a" >INTERNATIONAL WOMENS DAY 08/03/22</li>
                   <li className="a" >ESSAY WRITING 04/01/22</li>
                   <li className="a" >COVID VACCINATION DRIVE 28/12/21</li>
                   <li className="a" >SWACHH BHARAT 24/12/21</li>
                   <li className="a" >INDUCTION PROGRAM 04/12/21</li>
                   <li className="a" >POLLUTION DAY 02/12/21</li>
                   <li className="a" >DIWALI AWARENESS 03/11/21</li>
                   <li className="a" >BATHUKAMMA SAMBARALU 08/10/21</li>
                   <li className="a" >NSS DAY CELEBRATIONS 24/09/21</li>
                   <li className="a" >ECO FRIENDLY GANESH IMMERSION 18/09/21</li>
                   <li className="a" >BIKE RALLY 14/08/22</li>
                   <li className="a" >NSS SPECIAL CAMP 2022 21/03/22 TO 27/03/22</li>
                   <li className="a" >ABHISTI SEVA PURASKAR 03/10/21</li>
                   </ul>
                   <h4 className="left">2020 - 2021</h4>
                   <ul>
                   <li href="#" className="a">WOMENS DAY 08/03/21</li>
                   <li href="#" className="a">PLANT A DESIRE 02/01/21</li>
                   <li href="#" className="a">FOOD DISTRIBUTION TO THE NEEDY 24/09/20</li>
                   <li href="#" className="a">ECO GANESH 23/08/20</li>
                   <li href="#" className="a">6TH PHASE OF HARITHAHARAM 21/07/20</li>
                   <li href="#" className="a">INTERNATIONAL YOGA DAY 21/06/2</li>
                   </ul>
                   <h4 className="left">2019 - 2020</h4>
                   <ul>
                  <li href="#" className="a">ABHIYANTRIKI 04/11/19</li>
                  <li href="#" className="a">DOOR TO DOOR AWARENESS ON DUST TO THE DUSTBIN IN KANDLAKOYA 06/10/19</li>
                  <li href="#" className="a">CLAY GANESH IMMERSION 07/09/19</li>
                  <li href="#" className="a">CLAY GANESH DISTRIBUTION 31/08/19</li>
                  </ul>

        
                </div>
              }
              category = "College Events"
            />
          </Route>

          <Route path="/sevent">
            <Events
              text={
                <div className="row">
                <ul>
                 <h4 className="left">2021 -2022</h4>
                 <li className="a">SVATANTRA BHARATHA VAJROTSAVALU (NATIONAL ANTHEM) 16/08/22</li>
                 <li className="a">NATIONAL YOUTH PARLIAMENT 10/03/22</li>
                 <li className="a">NATIONAL SCIENCE DAY 28/02/22</li>
                 <li className="a">INTERNATIONAL BIODIVERSITY DAY AND ENVIRONMENTAL DAY 2022 05/06/22</li>
                 <li className="a">PRAVASI TELANGANA DIVAS 12/12/21</li>
                 </ul>
                 <h4 className="left">2020 - 2021</h4>
                 <ul>
                 <li className="a">SRISHTI 2021 02/03/21</li>
                 </ul>
                 <h4 className="left">2019 - 2020</h4>
                 <ul>
                 <li className="a">KASHMIR TELANGANA YOUTH SUMMIT 14/02/20</li>
                 <li className="a">STATE LEVEL PROGRAM ON TELANGANA HARITHAHARAM 30/08/19 TO 05/06/19</li>
                 </ul>
                </div>
              }
              category = "State Events"
            />
          </Route>

          <Route path="/uevent">
            <Events
              text={
                <div className="row">
                  <h4 className="left">2021 - 2022</h4>
                  <ul>
                  <li className="a">INDEPENDENCE DAY CELEBRATIONS AT JNTUH 15/08/22</li>
                  <li className="a">RED RIBBON CAMPIGN 08/04/22</li>
                  <li className="a">CLEAN INDIA CAMPIGN 30/10/21</li>
                  <li className="a">FIT INDIA MOVEMENT-2.0 &emsp; 02/10/21</li>
                  <li className="a">INSPIRE 2022 23/04/22</li>
                  </ul>
                  <h4 className="left">2020 - 2021</h4>
                  <ul>
                  <li className="a">RAKSHIN WORKSHOP 04/08/20-26/10/20</li>
                  <li className="a">PRE RD SELECTIONS 13/11/20</li>
                  </ul>
                  <h4 className="left">2019 - 2020</h4>
                  <ul>
                  <li className="a">UNIVERSITY TO UNIVERSALITY 02/11/19</li>
                  <li className="a">NSS GOLDEN JUBILEE 22/09/19 TO 24/09/19</li>
                  <li className="a">PRAVEGAH 27/02/20</li>
                  <li className="a">SAVE MOTHER EARTH BY SAYING NO TO PLASTIC 20/02/20</li>
                  <li className="a">HEARTFULNESS 2020 07/02/20 TO 08/02/20</li>
                  <li className="a">ISKCON 5K RUN 04/02/20</li>
                  <li className="a">KILL CANCER BY ISKCON 19/12/19</li>
                  <li className="a">100TH GANDHI JAYANTHI 02/10/19</li>
                  </ul>
                </div>
              }
              category = "Universtity Events"
            />
          </Route>

          <Route path="/nevent">
            <Events
              text={
                <div className="row">
                  <h4 className="left">2021 - 2022</h4>
                  <ul>
                  <li className="a">NATIONAL YOUTH FESTIVAL 12/01/22</li>
                  <li className="a">NIC ODISHA 2022 03/06/22 TO 09/06/22</li>
                  <li className="a">NIC TELANGANA 2022 13/05/22 TO 21/05/22</li>
                  <li className="a">NIC HARYANA 19/11 21 TO 25/11/21</li>
                  </ul>
                  <h4 className="left">2020 - 2021</h4>
                  <ul>
                  <li className="a">RD PARADE CAMP 2021 31/12/20 TO 28/01/21</li>
                  <li className="a">PRE RD CAMP 20/11/20 TO 29/11/20</li>
                  </ul>
                  <h4 className="left">2019 -2020</h4>
                  <ul>
                  <li className="a">NIC JAIPUR 27/02/20 TO 04/03/20</li>                    
                  <li className="a">NIC EAST GODAVARI 26/02/20 TO 03/03/20</li>
                  <li className="a">PRE RD PARADE CAMP 05/11/19 TO 14/11/19</li>
                  </ul>
                </div>
              }
              category = "National Events"
            />
          </Route>

          <Route path="/">
            <About />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>

  );
}

export default App;

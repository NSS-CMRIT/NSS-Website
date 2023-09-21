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
import Media from './components/Media/Media';
import Videoz from "./components/Videoz/Videoz"

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

          <Route path="/committeemembers">
            <Team />
            <Coord
              batch="2022-2023"
              t1img="https://drive.google.com/uc?export=view&id=1dEtFcl5CoRKQaWsiKckUxl93ORA5D6dZ"
              t1title="V. Mani Sai Varma"

              t2img="https://drive.google.com/uc?export=view&id=1GV1SEak-_P7xdYZjieyX3lhXP7Hv9maE"
              t2title="S. Jeethendra"

              t3img="https://drive.google.com/uc?export=view&id=1FjXus5jswGWyfieWapwtE4ER4p-oMbDt"
              t3title="K. Madhusudhan"

              t4img="https://drive.google.com/uc?export=view&id=1VKtyqmZgu0uC7Rms8hTmKHq2hjX3XY8l"
              t4title="G. Mythri"
            

            />
            <Coord
              batch="2023-2024"
          
              t1img="https://drive.google.com/uc?export=view&id=12KSAu27MdevvnAQ2QliScICRVAUj2tI6"
              t1title="S. Jashwanth"

              t2img="https://drive.google.com/uc?export=view&id=1jCZc7M4rxfLTga90ra8LtU7T_nU1DUKe"
              t2title="K. Hemanth"

              t3img="https://drive.google.com/uc?export=view&id=1oOrPKPesojH0x-j_cN975bklOGsXF8RB"
              t3title="L. Abhinav Reddy"

              t4img="https://drive.google.com/uc?export=view&id=1-LN2ADqcf9140dofdVSDTm0evd3RrFjA"
              t4title="S. Hemanth"

              t5img="https://drive.google.com/uc?export=view&id=1mMOxug_BquSPepPNYeAICRh5mBkFPG5M"
              t5title="V. Bhavishya"

              t6img="https://drive.google.com/uc?export=view&id=1DzvcBNzq00AAoaTOU-En98IFVxp61vAS"
              t6title="B. Sravani Reddy"

              t7img="https://drive.google.com/uc?export=view&id=1Nz4cZmAjabwzP0LSzRn5H5olWczqqlzF"
              t7title="Ch. Yashika"

              t8img="https://drive.google.com/uc?export=view&id=12DtlRLESSHIDctW5eN3WtwK1tpwES8n_"
              t8title="D. Shivani"

              t9img="https://drive.google.com/uc?export=view&id=19YXpo-jpfZt5ZJcJnXTD0vVOfSkD9NG4"
              t9title="A. Harsha Vardhan"

              t10img="https://drive.google.com/uc?export=view&id=1A0y3gIRYLGfjpIsEukQ3XnbPHz2AIivO"
              t10title="V. Mani Shankar Varma"

              t11img="https://drive.google.com/uc?export=view&id=1KFhbVWF8_LeFDM6d7IKw93VmEWXeyKC5"
              t11title="K. Chakrader Reddy"

              t12img="https://drive.google.com/uc?export=view&id=13oDqX5fR77TVP8t4tlvUufjQCpzfwqPU"
              t12title="P. Sai Charan Reddy"

             


            />
          </Route>
          
            
          <Route path="/photos"> <Gallery />
    </Route>

    <Route path="/media"> <Media />
    </Route>

    <Route path="/videos"> <Videoz />
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
                  <h4 className="left">2022 - 2023</h4>
                  <ul>
                   <li className="a" >INDEPENDENCE DAY 15/08/23</li>
                   <li className="a" >MERI MAATI MERA DESH 10/08/23</li>
                   <li className="a" >INTERNATIONAL PLASTIC FREE DAY 03/07/23</li>
                   <li className="a" >INTERNATIONAL YOGA DAY 21/06/23</li>
                   <li className="a" >HARITHA HARAM 15/05/23</li>
                   <li className="a" >MOTHER'S DAY 13/05/23</li>
                   <li className="a" >WOMEN'S DAY 08/03/23</li>
                   <li className="a" >REPUBLIC DAY 26/01/23</li>
                   <li className="a" >GIRL CHILD DAY & VOTERS DAY 24/01/23 & 25/01/23</li>
                   <li  className="a" >NSS ORIENTATION DAY  05/10/22</li>
                   </ul>




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
                <h4 className="left">2022 - 2023</h4>
                 <ul>
                 <li className="a">INTERNATIONAL BIODIVERSITY DAY 23/05/23</li>
                 <li className="a">SRISHTI 28/02/23</li>
                 <li className="a">STATE LEVEL YOUTH FESTIVAL 15/12/22 TO 17/12/22</li>
                 
                  
                 </ul>
                 <h4 className="left">2021 -2022</h4>
                 <ul>
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
                  <h4 className="left">2022 - 2023</h4>
                  <ul>
                  <li className="a">MEDCHAL DISTRICT LEVEL YUVA UTSAV 20/07/23</li>
                  <li className="a">TELANGANA RASHTRA AVATARNA DASHBADI 20/06/23</li>
                  <li className="a">NARCOTIC DRUGS & ADVERSE EFFECTS 03/06/23</li>
                  <li className="a">TRANING ON YOUTH LEADERSHIP & COMMUNITY DEVELOPMENT 02/02/23 TO 04/02/23</li>
                  </ul>
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
                  <li className="a">RAKSHIN WORKSHOP 04/08/20 TO 26/10/20</li>
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
                  <h4 className="left">2022 - 2023</h4>
                  <ul>
                  <li className="a">12TH NATIONAL YOUTH FESTIVAL (KARNATAKA) 12/01/23 TO 16/01/23</li>
                  </ul>
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

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
import RDParade from "./components/RD-Parade/RDParade"

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
              batch="Student Coordinators"
              t1img="../images/Student Coordinators/1.jpg"
              t1title="V. Mani Sai Varma  "
            
              t2img="../images/Student Coordinators/2.jpg"
              t2title="S. Jeethendra"

              t3img="../images/Student Coordinators/3.jpg"
              t3title="K. Madhusudhan"

              t4img="../images/Student Coordinators/17.jpg"
              t4title="B. Shravan Goud"

              t5img="../images/Student Coordinators/4.jpg"
              t5title="G. Mythri"
            

            />
            <Coord
              batch="Student Coordinators"
          
              t1img="../images/Student Coordinators/5.jpg"
              t1title="S. Jashwanth"

              t2img="../images/Student Coordinators/6.jpg"
              t2title="K. Hemanth Bahubali"

              t3img="../images/Student Coordinators/7.jpg"
              t3title="K. Hemanth"

              t4img="../images/Student Coordinators/8.jpg"
              t4title="S. Hemanth"

              t5img="../images/Student Coordinators/9.jpg"
              t5title="V. Bhavishya"
            />
            <Coord
              batch="Student Coordinator's"
              t1img="../images/Student Coordinators/10.jpg"
              t1title="B. Sravani Reddy "
           
              

              t2img="../images/Student Coordinators/11.jpg"
              t2title="Ch. Yashika"

              t3img="../images/Student Coordinators/12.jpg"
              t3title="D. Shivani"

              t4img="../images/Student Coordinators/13.jpg"
              t4title="A. Harsha Vardhan"

              t5img="../images/Student Coordinators/14.jpg"
              t5title="V. Mani Shankar Varma"

              t6img="../images/Student Coordinators/15.jpg"
              t6title="K. Chakradar Reddy"

              t7img="../images/Student Coordinators/16.jpg"
              t7title="P. Sai Charan Reddy"

              t8img="../images/Student Coordinators/18.jpg"
              t8title="B. Laxmipathi Balaji"

              t9img="../images/Student Coordinators/19.jpg"
              t9title="B. Pranay"

              t10img="../images/Student Coordinators/20.jpg"
              t10title="T. Pranit"


             


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
          <Route path="/RDParade">
            <RDParade/>
          </Route>

          <Route path="/cevent">
            <Events
              text={
                <div className="row">
                  <h4 className="left">2023 - 2024</h4>
                  <ul>
                  <li className="a" ><a href="https://drive.google.com/file/d/13wA34pI9Fo9ZFibUIQ6j2FMtPJ7HvjXQ/view?usp=drive_link">SWACHH DIWALI SHUBH DIWALI 11/11/23</a></li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1BKPiyUa83xd7eQCvSroVTjwMuVNaHME_/view?usp=drive_link">AMRIT KALASH YATRA 11/10/23</a></li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1Y2m7WgjK9zWjsj17S5vhV6x607lHRQpV/view?usp=drive_link">NSS DAY 24/09/23</a></li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1ssrWxNNEmQI9HgV9bzJ5E1GzFge6Mloe/view?usp=drive_link">NSS ORIENTATION DAY - 2023 22/09/23</a> </li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1bhQA_DxSsZNHn6ZciS0sS-Z3zg58cAZA/view?usp=drive_link">MAATI VINAYAKA DISTRIBUTION 16/09/23</a></li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1gUJVFK5Pw51Ip4_paNifa7cOSKphkk7E/view?usp=drive_link">DEEKSHARAMBHAM 09/09/23</a></li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1IeOW_8Nw_tiJ9feVpepvyCAQ9IZu8d97/view?usp=drive_link">BODHI 08/09/23 to 10/09/2023</a></li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1tA-ABwvHXEKYzFyLW4N5SXbgm05aUns9/view?usp=drive_link">INDEPENDENCE DAY 15/08/23</a></li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1kg19WddPFOyzM0JUk6KEZL_g8Kg5f2K-/view?usp=drive_link">MERI MAATI MERA DESH 10/08/23</a></li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1CqejQPSW7W2sSvC5y3sb4NAcM6b6G7Gu/view?usp=drive_link">INTERNATIONAL PLASTIC FREE DAY 03/07/23</a></li>
                  <li className="a" ><a href="https://drive.google.com/file/d/1ONPj9CaZ0UfAVMyo74upyWTJGyAnhhkv/view?usp=drive_link">SAMSKRUTHI SAMVANDHAM 03/07/23</a></li>
                   </ul>
                  <h4 className="left">2022 - 2023</h4>
                  <ul>
                   
                   <li className="a" ><a href="https://drive.google.com/file/d/1Nlfz-UJKO2L2rXkmqtIZC6OqDMkikq4r/view?usp=drive_link">INTERNATIONAL YOGA DAY 21/06/23</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1s3KI1M1vnyCL3VMshK-qfe_2N9h35niw/view?usp=drive_link">HARITHA HARAM 15/05/23</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1ulcR_uz8Lxq0IIjaIrUszHDf5946scca/view?usp=drive_link">MOTHER'S DAY 13/05/23</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1tOh8jaBTzyKT9KjGdPo2fcLbXttyZqKq/view?usp=drive_link">WOMEN'S DAY 08/03/23</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1YgHMSCcbRTZBmohy2Qvaz4dX3VFjYq45/view?usp=drive_link">GIRLS CHILD DAY, VOTER'S DAY & REPUBLIC DAY 26/01/23</a></li>
                   
                   <li  className="a" ><a href="https://drive.google.com/file/d/1HWWexHyDxpq57bEpsKaucRvAfl7nFgVd/view?usp=drive_link">NSS ORIENTATION DAY  05/10/22</a></li>
                   <li  className="a" ><a href="https://drive.google.com/file/d/1c8bkPiKZgzlvttgeYyz1qVclClugQrmc/view?usp=drive_link">BATHUKAMMA SANDHADI 01/10/22</a></li>
                   <li  className="a" ><a href="https://drive.google.com/file/d/133yZhW_Qz-dI4vSHqe6Z-kKhfo0eztMu/view?usp=drive_link">DANDIYA NAVRANG 30/09/2022</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/15x0kbqjW6zwtughmCB15i8oumyyIVRCX/view?usp=drive_link">NSS DAY 24/09/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1dUgl8nC3CF1R20AAz0mhoYzV73fK1k2Y/view?usp=drive_link">KANIKA GANESH DISTRIBUTION 31/08/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1Qvkmj8E5s5pMs83OI7cGLTW2iUNg6Qu5/view?usp=drive_link">SWATANTRA BHARATHA VAJROTHSAVALU (INDEPENDENCE DAY) 15/08/22</a></li>
                   </ul>




                  <h4 className="left">2021 - 2022</h4>
                  <ul>
                   
                   <li className="a" ><a href="https://drive.google.com/file/d/1dsuCLmjflNtwdmhpHAunQXR2X5jQQtxu/view?usp=drive_link">INTERNATIONAL YOGA DAY 23/06/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1TKJuOplNkMZLs_RproRt-r1uHiCQw-iz/view?usp=drive_link">FATHER'S DAY 18/06/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1ZxUgFF7LgdEhvekLKBaRurt7cZljGR2c/view?usp=drive_link">PLANTATION DRIVE & CLEAN AND GREEN 04/06/22</a></li>
                   
                  
                   <li className="a" ><a href="https://drive.google.com/file/d/1MbMxpBCndaob6CunXpocM4OqlEfuX-p6/view?usp=drive_link">AROGYAM AVAGAHANA ABHIVRUDHI 11/05/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1ACbpWDpvuDC_XFhD0AfMwJFyRvOMDzkU/view?usp=drive_link">MOTHER'S DAY 07/05/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1wCCtdbK1-KnVRx2kxnZ-BYCwXETyaP1j/view?usp=drive_link">UGADI CELEBRATION 01/04/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1O-UBWxT4jFnYo17jt-s5nzfkxQS4LHy3/view?usp=drive_link">INTERNATIONAL WOMENS DAY 08/03/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1rKz36P038ZzZEyv6onVYqCHjto1M5c5i/view?usp=drive_link">NATIONAL GIRL CHILD DAY,  VOTER'S DAY & REPUBLIC DAY 26/01/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/13diwuF7L0Lfr8R99nlnTfxQ97i5esoIa/view?usp=drive_link">ESSAY WRITING 04/01/22</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1_SUO_jHdhPewjAFjL_ycmEEYOyOvAu9m/view?usp=drive_link">COVID VACCINATION DRIVE 28/12/21</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1n1ckVPBZnh3w7-0S_NHdDwGvHyFtyfmO/view?usp=drive_link">SWACHH BHARAT 24/12/21</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1Xl3zzkQnxHY-iNEXSkKM5HamJfj1R3Y7/view?usp=drive_link">INDUCTION PROGRAM 04/12/21</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1z3mWqE00IhN21spxh6xEiNgm4r9HCQLN/view?usp=drive_link">POLLUTION DAY 02/12/21</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1Ah5KCXD1dLyN230Gde2Uh3Nv6UfxTPdF/view?usp=drive_link">ECO - FRIENDLY DIWALI AWARENESS 03/11/21</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1dnxH8rbwcW5sFtKcW48AhFxmchAAy51O/view?usp=drive_link">BATHUKAMMA SAMBARALU 08/10/21</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1xBXYQ_a-LLn0nUs3TE0VsVf81aliIPKf/view?usp=drive_link">NSS DAY CELEBRATIONS 24/09/21</a></li>
                   <li className="a" ><a href="https://drive.google.com/file/d/1ETy8oFqfzOJ_tliWzxW9_wlboSKDBIWh/view?usp=drive_link">ECO FRIENDLY GANESH IMMERSION 18/09/21</a></li>
                   
                   
                   <li className="a" ><a href="https://drive.google.com/file/d/1XpO986ntZXsrjRFHO5S0JFchf076ys51/view?usp=drive_link">ABHISTI SEVA PURASKAR 03/10/21</a></li>
                   </ul>
                   <h4 className="left">2020 - 2021</h4>
                   <ul>
                   
                   <li href="#" className="a"><a href="https://drive.google.com/file/d/1lBsAg0CeBxTzC7PCsnN_lVnORZO66imv/view?usp=drive_link">FOOD DISTRIBUTION TO THE NEEDY 24/09/20</a></li>
                   <li href="#" className="a"><a href="https://drive.google.com/file/d/1VnAZCAec6BOKIdreM9syf4tMYhcJEUcU/view?usp=drive_link">ECO GANESH 23/08/20</a></li>
                   <li href="#" className="a"><a href="https://drive.google.com/file/d/1AvS8it5wZFD-c7tVvK9JEFQQoDCbBn_I/view?usp=drive_link">PHASE OF HARITHAHARAM 21/07/20</a></li>
                   <li href="#" className="a"><a href="https://drive.google.com/file/d/16SxXN7a_AuUiOlsmh9r2wX-m2eM4cAqx/view?usp=drive_link">INTERNATIONAL YOGA DAY 21/06/20</a></li>
                   </ul>
                   <h4 className="left">2019 - 2020</h4>
                   <ul>
                   <li href="#" className="a"><a href="https://drive.google.com/file/d/1YWosYgXhsNGCqNAprYhXr9ylUMD42a-h/view?usp=drive_link">INTERNATIONAL WOMEN'S DAY  07/03/20</a></li>
                  <li href="#" className="a"><a href="https://drive.google.com/file/d/1uCOxzMfx3sM_o04ouD8z7y8uwKfvRdF9/view?usp=drive_link">ABHIYANTRIKI 04/11/19</a></li>
                  <li href="#" className="a"><a href="https://drive.google.com/file/d/11zpwB6Ky3Wf81hjGxopNhy-jAk481djs/view?usp=drive_link">DOOR TO DOOR AWARENESS ON DUST TO THE DUSTBIN IN KANDLAKOYA 06/10/19</a></li>
                  
                  
                  </ul>
                  <h4 className="left">2018 - 2019</h4>
                   <ul>

                  
                  <li href="#" className="a"> <a href="https://drive.google.com/file/d/1GUqzNu3zPhnkTVST0uIIOeLVa5Wrf9G3/view?usp=drive_link">CRPF MARTYRS RALLY 16/02/2019</a></li>
                  <li href="#" className="a"><a href="https://drive.google.com/file/d/1jKRPhvJxu6qMmDLCHQimpKbUtFGScNwa/view?usp=drive_link">TRAFFIC AWARENESS PROGRAMME 10/02/2019</a></li>
                  <li href="#" className="a"><a href="https://drive.google.com/file/d/1frW2FtFA3mkZRcbRct-gDVF0m6RMiXBY/view?usp=drive_link">REPUBLIC DAY 26/01/2019</a></li>  
                  <li href="#" className="a"><a href="https://drive.google.com/file/d/1sZFFyPuzExx0Ef5WbjJNouRp6OgCtgUn/view?usp=drive_link">NSS DAY 24/09/2019</a></li>
                  <li href="#" className="a"><a href="https://drive.google.com/file/d/1dvOdgipheAcLOVqdmawPu4PeBm-2Uuz9/view?usp=drive_link">CLAY GANESHA WORKSHOP 11/09/2018</a></li>
                  
                  
                  
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
                 
                 <li className="a"><a href="https://drive.google.com/file/d/11hHmepSWl1E3SC7Sz9JA0uzYlVHXOjI6/view?usp=drive_link">OZONE DAY - PPT CONTEST EPTRI 16/09/23</a></li>
                 <li className="a"><a href="https://drive.google.com/file/d/1CLAS5jMKFAafF3iQvFE-wPylT5EM2koc/view?usp=drive_link">PAYING HOME TO NATIONAL LEADERS  15/09/23</a></li>
                 <li className="a"><a href="https://drive.google.com/file/d/1JsU5GYqMwiW5lO_-1L26hdD2GcX7SQPA/view?usp=drive_link">HYDERABAD LIBERATION DAY 15/09/23</a></li>
                 </ul>
                <h4 className="left">2022 - 2023</h4>
                 <ul>
                 <li className="a"><a href="https://drive.google.com/file/d/1PAFDP_rc0O97Tn2yeOTz7Ntm55vpxx8O/view?usp=drive_link">INTERNATIONAL BIODIVERSITY DAY 23/05/23</a></li>
                 <li className="a"><a href="https://drive.google.com/file/d/1sJTcWn0AYzpQ8xMr95FSst4iRI4h4acv/view?usp=drive_link">SRISHTI 28/02/23</a></li>
                 <li className="a"><a href="https://drive.google.com/file/d/1o0WK1bLV1Al-z7YXrvnY8w-7HaXuxsyO/view?usp=drive_link">STATE LEVEL YOUTH FESTIVAL 15/12/22 TO 17/12/22</a></li>

                 
                  
                 </ul>
                 <h4 className="left">2021 -2022</h4>
                 <ul>
                 
                 <li className="a"><a href="https://drive.google.com/file/d/187Xzu9prStDDnRSkmw7ZfqI9XIrzbHPs/view?usp=drive_link">NATIONAL YOUTH PARLIAMENT 10/03/22</a></li>
                 <li className="a"><a href="https://drive.google.com/file/d/11x05CgQATdx2tj51QX6jPl83bqvjTjSP/view?usp=drive_link">NATIONAL SCIENCE DAY 28/02/22</a></li>
                 <li className="a"><a href="https://drive.google.com/file/d/19Ic2H4qVwFuSSe4aTk1RUe_m4f_1hGni/view?usp=drive_link">INTERNATIONAL BIODIVERSITY DAY AND ENVIRONMENTAL DAY 2022 05/06/22</a></li>
                 <li className="a"><a href="https://drive.google.com/file/d/1uISl545IZuKC3rxA7PD4h5NKbZOsqdqn/view?usp=drive_link">PRAVASI TELANGANA DIVAS 12/12/21</a></li>
                 </ul>
                 <h4 className="left">2020 - 2021</h4>
                 <ul>
                 <li className="a"><a href="https://drive.google.com/file/d/1KFfnONc5e_ZQS1N47yR3nHzXVNm2CP6W/view?usp=drive_link">SRISHTI 2021 02/03/21</a></li>
                 </ul>
                 <h4 className="left">2019 - 2020</h4>
                 <ul>
                 <li className="a"><a href="https://drive.google.com/file/d/1Dsaa6cOL5Z7dgyd36zkT5VYLWG4ca5Jb/view?usp=drive_link">KASHMIR TELANGANA YOUTH SUMMIT 14/02/2020</a></li>
                 <li className="a"><a href="https://drive.google.com/file/d/100OU6A9glBdig-tHuqLQ6AWuW10GKxET/view?usp=drive_link">STATE LEVEL PROGRAM ON TELANGANA HARITHAHARAM 30/08/19 TO 05/06/19</a></li>
                
                 </ul>
                 <h4 className="left">2018 - 2019</h4>
                 <ul>
                 <li className="a"> <a href="https://drive.google.com/file/d/1UvHnrhfhMiW4K3E-Wv9wA-DdSzi-rWPB/view?usp=drive_link">TELANGANA STATE YOUTH PARLIAMENT 06/02/2019</a></li>
                 
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
                  <h4 className="left">2023 - 2024</h4>
                  <ul>
                  
                  <li className="a" ><a href="https://drive.google.com/file/d/1nVPu2HXQa7muAETH_1WoZFpHUoFIgr7m/view?usp=drive_link">ATMOS 11/11/23</a></li>
                  
                  <li className="a"><a href="https://drive.google.com/file/d/1mhBuhFVUBaXYEjTJf9lv78dIhrzB0Fuu/view?usp=drive_link">PRE REPUBLIC DAY PARADE SELECTIONS - 2023 04/09/23</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1hT2yPRQ-qni4oaoJi3OqQMwhgfLjnVWF/view?usp=drive_link">DISTRICT LEVEL YUVA UTSAV - 2023 20/07/23</a></li>
                  </ul>
                  <h4 className="left">2022 - 2023</h4>
                  <ul>
                 
                  <li className="a"><a href="https://drive.google.com/file/d/14Ejd2phYz7xmHdq2klNzHvEouo2cOAZ7/view?usp=drive_linkTELANGANA ">RASHTRA AVATARNA DASHBADI 20/06/23</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1t-897pUrnsRjOh2MMaouPTU1eM2UvzJ4/view?usp=drive_linkNARCOTIC">NARCOTIC DRUGS & ADVERSE EFFECTS 03/06/23</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1Y8bktER3ArJS7W-cS3wJSTZg6Py2akdM/view?usp=drive_linkTRANING">TRAINING ON YOUTH LEADERSHIP & COMMUNITY DEVELOPMENT 02/02/23 TO 04/02/23</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/11Q2u3_Xco9O2-rIDZGyYkl2DNZtv8fAS/view?usp=drive_link">INDEPENDENCE DAY CELEBRATIONS AT JNTUH 15/08/22</a></li>
                  </ul>
                  <h4 className="left">2021 - 2022</h4>
                  <ul>
                  
                  <li className="a"><a href="https://drive.google.com/file/d/1Onxb3IZW707XHIUIu2VQG7JtoaL0kqZX/view?usp=drive_link">RED RIBBON CAMPIGN 08/04/22</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1zEhKoQxR18m_NRUcoGjbMsxT9Whmxjyp/view?usp=drive_link">CLEAN INDIA CAMPIGN 30/10/21</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1q0TdV0br23jMxKV-HOqudfcUOBwVoS75/view?usp=drive_link">FIT INDIA MOVEMENT-2.0 02/10/21</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1hvdDzYkeC0bzipzNkqtGpsecIttKte40/view?usp=drive_link">INSPIRE 2022 23/04/22</a></li>
                  </ul>
                  <h4 className="left">2020 - 2021</h4>
                  <ul>
                  <li className="a"><a href="https://drive.google.com/file/d/1BNLMs5qSjgjg90PiNBJG3_-9a-3JSQQx/view?usp=drive_linkRAKSHIN">WORKSHOP 04/08/20 TO 26/10/20</a></li>
                  
                  </ul>
                  <h4 className="left">2019 - 2020</h4>
                  <ul>
                  <li className="a"><a href="https://drive.google.com/file/d/1CTL64Nsri9uT8Wtr-web2kxHeuZsU_kk/view?usp=drive_link">UNIVERSITY TO UNIVERSALITY 02/11/19</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1JL0RNemA7EuSwzuprFm3GKY8UqETZ6zG/view?usp=drive_link">NSS GOLDEN JUBILEE 22/09/19 TO 24/09/19</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1kqIoR9D6XzLOtPUVJkPfZfbOUH6voBwn/view?usp=drive_link">PRAVEGAH 27/02/20</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1zyYjzuzAM6_BRTaYmAtKSxu76EGyXOxD/view?usp=drive_link">SAVE MOTHER EARTH BY SAYING NO TO PLASTIC 20/02/20</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/18fEjvNJjzZw7qkRRXQUAuOVkjhVrXwY7/view?usp=drive_link">HEARTFULNESS 2020 07/02/20 TO 08/02/20</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1AwJsCYiz7OumiYHHnRZpJR1a7LNd0q84/view?usp=drive_link">ISKCON 5K RUN 04/02/20</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1gZdr_N2Ijfm4ZUW-UVatze7pFUfuW2pn/view?usp=drive_link">KILL CANCER BY ISKCON 19/12/19</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1MYAjvGfPoY7EtHYtzE8U8EIA2x6mwUyW/view?usp=drive_link">100TH GANDHI JAYANTHI 02/10/19</a></li>
                  </ul>
                  <h4 className="left">2018 - 2019</h4>
                  <ul>
                  <li className="a"><a href="https://drive.google.com/file/d/1wC9zU4GbYFFgXU8VphBxWuXoNY9u02wF/view?usp=drive_link">JNTUH YOUTH FEST 02/02/2019</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/19N3qBh1N0NAfVLPAJPeP4Guw9qjiM1LC/view?usp=drive_link">SEVA BHARATHI 02/10/2018</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1YCXWFhouIVuugvvM14sEMTv_pg_1PEqA/view?usp=drive_link">SWACHH PAKWADA 16/08/2018</a></li> 
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
                    <h4 className="left">2023 - 2024</h4>
                  <ul>
                  <li className="a"><a href="https://drive.google.com/file/d/1Ha6Iwgqli7DAvwlpKxGUyww6Zi1LaHCB/view?usp=drive_link">RD PARADE CAMP 01/11/2023 TO 10/11/2023</a></li> 
                  <li className="a"><a href="https://drive.google.com/file/d/1u3NAhn--3uOnBiQAUuHf09T3ZZpGCU4H/view?usp=drive_link">NATIONAL LEVEL MMMD PROGRAMME 30/10/23 TO 31/10/23</a></li>
                  </ul>
                  <h4 className="left">2022 - 2023</h4>
                  <ul>
                  <li className="a"><a href="https://drive.google.com/file/d/1ZO04V7t6YkPP7NoNeOnqMYhM-gL9Hmk2/view?usp=drive_link12TH">NATIONAL YOUTH FESTIVAL (KARNATAKA)12/01/23 TO 16/01/23</a></li>
                  </ul>
                  <h4 className="left">2021 - 2022</h4>
                  <ul>
                  <li className="a"><a href="https://drive.google.com/file/d/1kmxzR9jBeG5Kt_sjYKorbLCVGAT6nl5G/view?usp=drive_linkk">NATIONAL YOUTH FESTIVAL 12/01/22 </a></li>
                  
                  </ul>
                  <h4 className="left">2020 - 2021</h4>
                  <ul>
                  <li className="a"><a href="https://drive.google.com/file/d/18k7AnYg4XfbyZCl5NYNMO4bj0_2Z2sS4/view?usp=drive_linkRD">PARADE CAMP 2021 31/12/20 TO 28/01/21</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/11uZOwb7aOaaZ9ba4KQMGPnc4TfMn-kR5/view?usp=drive_linkPRE">RD CAMP 20/11/20 TO 29/11/20</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1Ux2oxzRUBixfV_3gipL_uryfVUbDRB8k/view?usp=drive_link">PRE RD PARADE CAMP 20/11/20 TO 29/11/20</a></li>
                  </ul>
                  <h4 className="left">2019 -2020</h4>
                  <ul>
                  <li className="a"><a href="https://drive.google.com/file/d/1o9T2vLY1sEk219hkelR4luss-YpDViH2/view?usp=drive_link">NIC JAIPUR 27/02/20 TO 04/03/20</a></li>                    
                  <li className="a"><a href="https://drive.google.com/file/d/1Y7lxVX4yvi6QGvKxPgCoTB_PcO7w8YXF/view?usp=drive_link">NIC EAST GODAVARI 26/02/20 TO 03/03/20</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1athycqNDDXEGlyKCEhiNZiSEow6jG97F/view?usp=drive_link">PRE RD PARADE CAMP 05/11/19 TO 14/11/19</a></li>
                  </ul>
                  <h4 className="left">2018 -2019</h4>
                  <ul> 
                                    
                  <li className="a"><a href="https://drive.google.com/file/d/1UyVCT7ItRUmpyIsdnbH5SCfb9klHS8PN/view?usp=drive_link">NATIONAL YOUTH DAY 19/01/2019</a></li>
                  <li className="a"><a href="https://drive.google.com/file/d/1yp4PFrUK2pzzxSYsMlMS8SfyMSEJFuyK/view?usp=drive_link">NIC NARSAPUR 26/08/2018 TO 01/09/2018</a></li>
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

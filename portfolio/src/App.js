
import './App.css';
import hero from "./images/hero.JPG"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3, faReact,faJs, faHtml5,  faNode, faGit, faGoogle} from '@fortawesome/free-brands-svg-icons'





function App() {
  return (
    <div className="App">
      <div>
      <header>
        <div className="nav">
          <a className="nav-itm" id="about" href="#about-section">About</a>
          <a className="nav-itm" id="projects" href="#project-section">Projects</a>
          <a className="nav-itm"id="contact"href="#contact-section">Contact</a>
    
        </div>
      </header>
      <div className="body">
        <section className="section-a" id="about-section">
          <div className="grid-area">
           <div className="grid-1"></div>
            <div className="grid-2">
              <img src={hero} alt="Photo of subject"></img>
              </div>
            <div className="grid-3">
              <p>I love to code! I taught myself to build websites for fun, but quickly developed a passion for identifying and solving problems, 
                and using that to create something amazing out of code. Coding has given me the chance to express myself, and has motivated me to 
                continue growing as a developer and to ultimately break into the field.  </p>
          
            </div>
            <div className="grid-4">
              <h1>Hi I'm Zack. I am a Front End Web Developer and Designer, check out what I have made!</h1>
            
              </div>
          </div>
        </section>

        <section className="section-b">
          <div className="skills">
            <h2>These are some of the skills I've picked up</h2>
            </div>
          <div className="known-icons">
          <div className="icons"><FontAwesomeIcon icon={faHtml5} fixedWidth size="2xl"/> 
            <h4>HTML</h4>
            </div>
            <div className="icons"><FontAwesomeIcon icon={faJs} fixedWidth size="2xl"/> 
            <h4>JavaScript</h4>
            </div>
            <div className="icons"><FontAwesomeIcon icon={faCss3} fixedWidth size="2xl"/> 
            <h4>CSS3</h4>
            </div>
            <div className="icons"><FontAwesomeIcon icon={faNode} fixedWidth size="2xl"/> 
            <h4>NodeJS</h4>
            </div>
            <div className="icons"><FontAwesomeIcon icon={faGit} fixedWidth size="2xl"/> 
            <h4>git</h4>
            </div>
            <div className="icons"><FontAwesomeIcon icon={faReact} fixedWidth size="2xl"/> 
            <h4>React</h4>
            </div>
            </div>
               
     
          
        </section>

        <section className="section-a" id="project-section">
          <div className="project-intro">
            <h2>Here are some of my Recent Projects</h2>
            <p></p>
          </div>
          <div className="project-grid">
              <div className="grid-item grd-ip">
              <h3 className="grid-title">IP address Tracker</h3>
              <button className="btn" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://github.com/thezrbauer/Ip-address-tracker';
                }}> View Code</button>
              </div>

              <div className="grid-item grd-gall">
                <h3 className="grid-title">Galleria</h3>
                <button className="btn" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://github.com/thezrbauer/galleria';
                }}> View Code</button>
                </div>

              <div className="grid-item grd-time">
                <h3 className="grid-title">Time Tracker</h3> 
                <button className="btn" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://github.com/thezrbauer/time_tracker';
                }}> View Code</button>
                </div>
                
              <div className="grid-item grd-calc">
                <h3 className="grid-title">Calculator</h3>
                <button className="btn" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://github.com/thezrbauer/R_Calculator';
                }}> View Code</button>
                </div>

              <div className="grid-item grd-ec">
              <h3 className="grid-title">E-Commerce</h3>
              <button className="btn" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://github.com/thezrbauer/R_ecommerce';
                }}> View Code</button>
              </div>

              <div className="grid-item grd-book">
              <h3 className="grid-title">Bookmark Landing page</h3>
              <button className="btn" onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://github.com/thezrbauer/bookmark_landing_page';
                }}> View Code</button>
              </div>
             
          </div>
        </section>
    
        <section className="section-c">
          <div className="contact" id="contact-section">
        <h2>Click below and say Hi!</h2>
        </div>
            <div className="contact-icons"> 
                <FontAwesomeIcon icon={faGoogle} size="2xl"/>
                </div>


                
                </section>
        <footer></footer>
      </div>
      </div>
    </div>
  ); 
}

export default App;

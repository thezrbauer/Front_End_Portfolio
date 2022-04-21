
import './App.css';
import hero from "./images/hero.JPG"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3, faReact,faJs, faHtml5, faNodeJs, faNode, faGit, faGithub} from '@fortawesome/free-brands-svg-icons'





function App() {
  return (
    <div className="App">
      <div>
      <header>
        <div className="nav">
          <a className="nav-itm" id="about" href="#about-section">About</a>
          <a className="nav-itm" id="projects" href="#project-section">Projects</a>
          <a className="nav-itm"id="contact">Contact</a>
    
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
                and being able to create something Amazing from some lines of code. Coding gives me the chance to express myself,
                 and now I want to share my work with you </p>
          
            </div>
            <div className="grid-4">
              <h1>Hi I'm Zack. I am a Front End Web Designer, check out what I have made!</h1>
            
              </div>
          </div>
        </section>
        <section className="section-b" id="project-section">
          <div className="project-intro">
            <h2>Here are some of my Recent Projects</h2>
            <p></p>
          </div>
          <div className="project-grid">
              <div className="grid-item grd-ip">
              <h3 className="grid-title">IP address Tracker</h3>
              </div>

              <div className="grid-item grd-gall">
                <h3 className="grid-title">Galleria</h3>
                </div>

              <div className="grid-item grd-time">
                <h3 className="grid-title">Time Tracker</h3> 
                {/* <button>Visit the Site</button>
                <button>Look at the code</button> */}
                </div>
                
              <div className="grid-item grd-calc">
                <h3 className="grid-title">Calculator</h3>
                </div>

              <div className="grid-item grd-ec">
              <h3 className="grid-title">E-Commerce</h3>
              </div>

              <div className="grid-item grd-book">
              <h3 className="grid-title">Bookmark Landing page
              </h3></div>
             
          </div>
        </section>
        <section className="section-a">
          <div className="contact">
            <h2>This is what I know how to use</h2>
    
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faNode} />
            <FontAwesomeIcon icon={faGit} />
           
                <div>
                  icons
                </div>
            <h2>This is how to contact me</h2>
            <div>
                  icons
                </div>
                <FontAwesomeIcon icon={faGithub} />
               
          </div>
        </section>

        
        <footer></footer>
      </div>
      </div>
    </div>
  ); 
}

export default App;

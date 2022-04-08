
import './App.css';
import hero from "./images/hero.JPG"
import tracking from "./images/time-tracker-hero.PNG"
function App() {
  return (
    <div className="App">
      <div>
      <header>
        <div className="nav">
          <a className="nav-itm" id="about" href="#about-section">About</a>
          <a className="nav-itm" id="projects">Projects</a>
          <a className="nav-itm"id="contact">Contact</a>
          <a className="nav-itm"id="other">Resume</a>
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
              <p>I love to code! I taught myself to build websites for fun, but quickly developed a passion for problem solving, 
                and creating something from nothing with just my own ideas and lines of code. Coding gives me the chance to express myself,
                 and now I want to share my work with you </p>
          
            </div>
            <div className="grid-4">
              <h1>Hi I'm Zack. I am a Front End Web Designer, check out what I have made!</h1>
            
              </div>
          </div>
        </section>
        <section className="section-b">
          <div className="project-intro">
            <h2>Here are some of my Recent Projects</h2>
            <p>Check out below for a pirate to steal your children</p>
          </div>
          <div className="project-grid">
              <div className="grid-item">
              IP address Tracker
              </div>
              <div className="grid-item">galleria</div>
              <div className="grid-item"><img className="project-img" src={tracking}></img></div>
              <div className="grid-item">API</div>
              <div className="grid-item">E-Commerce</div>
              <div className="grid-item">Book mark thing</div>
             
          </div>
        </section>
        <section className="section-a">
          <div className="contact">Contact Stuff With Icons</div>
        </section>

        
        <footer></footer>
      </div>
      </div>
    </div>
  ); 
}

export default App;

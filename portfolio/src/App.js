
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <header>
        <div className="nav">
          <a className="nav-itm" id="about">About</a>
          <a className="nav-itm" id="projects">Projects</a>
          <a className="nav-itm"id="contact">Contact</a>
          <a className="nav-itm"id="other">Resume</a>
        </div>
      </header>
      <div className="body">
        <section className="sec">
          <div className="hero-body">
           <div className="hero-intro">
             <div className="intro-text">
              <h1>Hi I'm Zack. I am a Front End Web Designer with a passion for bringing his ideas to life.</h1>
              </div>
           <div className="hero-img">
              <img alt="Photo of subject"></img>
              </div>
              </div>
            <div className="hero-text">
              <p>Wee woo wee woo</p>
              <p>I am a Front End Web Designer. Looking to provide you with your dream project</p>
            </div>
          </div>
        </section>
        <section className="sec-alt">
          <div className="project-grid">
              <div className="grid-item">
              IP address Tracker
              </div>
              <div className="grid-item">galleria</div>
              <div className="grid-item">time tracking</div>
              <div className="grid-item">API</div>
              <div className="grid-item">E-Commerce</div>
              <div className="grid-item">Book mark thing</div>
             
          </div>
        </section>
        <section className="sec">
          <div className="contact">Contact Stuff With Icons</div>
        </section>
        <footer></footer>
      </div>
      </div>
    </div>
  ); 
}

export default App;

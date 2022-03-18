
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
        </div>
      </header>
      <div className="body">
        <section>
          <div className="hero-body">
            <div className="hero-img">
              <img alt="Photo of subject"></img>
              </div>
            <div className="hero-intro">
              <h1>Hi I'm Zack.</h1>
              </div>
            <div className="hero-text">
              <h2>Wee woo wee woo</h2>
              <p>I am a Front End Web Designer. Looking to provide you with your dream project</p>
            </div>
          </div>
        </section>
        <section>
          <div className="project-grid">
              <div className="grid-item">

              </div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
          </div>
        </section>
        <section>
          <div className="contact">Contact Stuff With Icons</div>
        </section>
        <footer></footer>
      </div>
      </div>
    </div>
  );
}

export default App;

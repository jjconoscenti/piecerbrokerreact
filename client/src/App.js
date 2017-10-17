import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import {Row, Col, Card, CardTitle} from 'react-materialize';


/*class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

const dougBalkin = {
  src: './teamImages/doug-balkin.jpg',
  width: '243.05px',
  height: '243.05px' 
};

class App extends Component {
    render() {
      return (
        <Row>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/doug-balkin.jpg"} waves='light'/>}
              title="Doug Balkin"
              reveal={<p>Subtly charming internet enthusiast and opera singer. Unapologetic thinker. Infuriatingly humble web aficionado. Avid tv advocate.</p>}>
              <p><a href="https://github.com/dbalkin77">More about Doug</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/jjnewdoggie.jpg"} waves='light'/>}
              title="JJ Conoscenti"
              reveal={<p>Currently a Product Owner & Scrum Master at Leapfrog Online. Formerly at consulting firm in the loop. Futurely at the Kanye West Presidential Library.</p>}>
              <p><a href="https://github.com/jjconoscenti">More about JJ</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/colin-mcatee.jpeg"} waves='light'/>}
              title="Colin McAtee"
              reveal={<p>Software engineer at RIVS Digital Interviews. Passionate about developing quality UI with dynamic backends. U Michigan Sports Fanatic.</p>}>
              <p><a href="https://github.com/colinmac17">More about Colin</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/puppers.jpg"} waves='light'/>}
              title="Katie McCarthy"
              reveal={<p>Full-stack web developer and classical musician. Bringing collaboration and creativity to web development. Repo owner, git master, rule setter.</p>}>
              <p><a href="https://github.com/mccarthinator">More about Katie</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/Lisa.jpg"} waves='light'/>}
              title="Lisa Mishra"
              reveal={<p>Senior data analyst at Hub Group and hip-hop vocalist. Fond of big words, Anthony Bourdain, and athropomorphizing inanimate objects.</p>}>
              <p><a href="https://github.com/lisamishra">More about Lisa</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/jake-thornberry.jpeg"} waves='light'/>}
              title="Jake Thornberry"
              reveal={<p>Creative, curious, and collaborative full-stack web developer passionate about strong UX/UI and clean design. Lifelong creator, runner, and actor.</p>}>
              <p><a href="https://github.com/wjthornberry">More about Jake</a></p>
            </Card>
          </Col>
        </Row>
    
        /*<div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12">
                        <div classname="section">

                            <div className="col m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src="" />
                                            <span className="card-title">Doug Balkin</span>
                                    </div>
                                        <div className="card-content">
                                            <p>Subtly charming internet enthusiast and opera singer. Unapologetic thinker. Infuriatingly humble web aficionado. Avid tv advocate.</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="https://github.com/dbalkin77">More about Doug</a>
                                        </div>
                                        </div>
                                </div>
                            <div className="col m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src="" />
                                            <span className="card-title">JJ Conoscenti</span>
                                    </div>
                                        <div className="card-content">
                                            <p>Currently a Product Owner & Scrum Master at Leapfrog Online. Formerly at consulting firm in the loop. Futurely at the Kanye West Presidential Library.</p>
                                        </div>
                                        <div className="card-action">
                                                <a href="https://github.com/jjconoscenti">More about JJ</a>
                                        </div>
                                    </div>
                                </div>

                            <div className="col m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src="" />
                                            <span className="card-title">Colin McAtee</span>
                                    </div>
                                    <div className="card-content">
                                        <p>Software engineer at RIVS Digital Interviews. Passionate about developing quality UI with dynamic backends. U Michigan Sports Fanatic.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://github.com/colinmac17">More about Colin</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src="" />
                                            <span className="card-title">Katie McCarthy</span>
                                    </div>
                                    <div className="card-content">
                                        <p>Full-stack web developer and classical musician. Bringing collaboration and creativity to web development. Repo owner, git master, rule setter.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://github.com/mccarthinator">More about Katie</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src="" />
                                            <span className="card-title">Lisa Mishra</span>
                                    </div>
                                    <div className="card-content">
                                        <p>Senior data analyst at Hub Group and hip-hop vocalist. Fond of big words, Anthony Bourdain, and athropomorphizing inanimate objects.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://github.com/lisamishra">More about Lisa</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src="" />
                                            <span className="card-title">Jake Thornberry</span>
                                    </div>
                                    <div className="card-content">
                                        <p>Creative, curious, and collaborative full-stack web developer passionate about strong UX/UI and clean design. Lifelong creator, runner, and actor.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://github.com/wjthornberry">More about Jake</a>
                                    </div>
                                </div>
                            </div>


                            <div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// export default Team;

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Row, Col, Card, CardTitle, Footer} from 'react-materialize';

class App extends Component {
    render() {
      return (
        <div>
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
<Row>
        <Col m={12} l={12}>
          <Footer copyrights="2017 Copyright PieceBroker"
	moreLinks={
		<a className="grey-text text-lighten-4 right" href="#!"></a>
	}
	links={
		<ul>
			<li><a className="grey-text text-lighten-3" href="https://github.com/dbalkin77">Doug Balkin</a></li>
			<li><a className="grey-text text-lighten-3" href="https://github.com/jjconoscenti">JJ Conoscenti</a></li>
			<li><a className="grey-text text-lighten-3" href="https://github.com/colinmac17">Colin McAtee</a></li>
			<li><a className="grey-text text-lighten-3" href="https://github.com/mccarthinator">Katie McCarthy</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/lisamishra">Lisa Mishra</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/wjthornberry">Jake Thornberry</a></li>
		</ul>
	}
	className='example'
>
		<h5 className="white-text">PieceBroker</h5>
		<p className="grey-text text-lighten-4">What's your mouth up for?</p>
</Footer>
</Col>
        </Row>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// export default Team;

export default App;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Row, Col, Card, CardTitle, Footer} from 'react-materialize';

class App extends Component {
    render() {
      return (
        <div>
        <Row>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/doug-balkin.jpg"} waves='light'/>}
              title="Doug Balkin"
              reveal={<p>Subtly charming internet enthusiast and opera singer. Unapologetic thinker. Infuriatingly humble web aficionado. Avid tv advocate.</p>}>
              <p><a href="https://github.com/dbalkin77">More about Doug</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/doug-balkin.jpg"} waves='light'/>}
              title="Doug Balkin"
              reveal={<p>Subtly charming internet enthusiast and opera singer. Unapologetic thinker. Infuriatingly humble web aficionado. Avid tv advocate.</p>}>
              <p><a href="https://github.com/dbalkin77">More about Doug</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/doug-balkin.jpg"} waves='light'/>}
              title="Doug Balkin"
              reveal={<p>Subtly charming internet enthusiast and opera singer. Unapologetic thinker. Infuriatingly humble web aficionado. Avid tv advocate.</p>}>
              <p><a href="https://github.com/dbalkin77">More about Doug</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/doug-balkin.jpg"} waves='light'/>}
              title="Doug Balkin"
              reveal={<p>Subtly charming internet enthusiast and opera singer. Unapologetic thinker. Infuriatingly humble web aficionado. Avid tv advocate.</p>}>
              <p><a href="https://github.com/dbalkin77">More about Doug</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/doug-balkin.jpg"} waves='light'/>}
              title="Doug Balkin"
              reveal={<p>Subtly charming internet enthusiast and opera singer. Unapologetic thinker. Infuriatingly humble web aficionado. Avid tv advocate.</p>}>
              <p><a href="https://github.com/dbalkin77">More about Doug</a></p>
            </Card>
          </Col>
          <Col m={4} s={4}>
            <Card header={<CardTitle reveal image={"./teamImages/doug-balkin.jpg"} waves='light'/>}
              title="Doug Balkin"
              reveal={<p>Subtly charming internet enthusiast and opera singer. Unapologetic thinker. Infuriatingly humble web aficionado. Avid tv advocate.</p>}>
              <p><a href="https://github.com/dbalkin77">More about Doug</a></p>
            </Card>
          </Col>
        </Row>
<Row>
        <Col m={12} l={12}>
          <Footer copyrights="2017 Copyright PieceBroker"
	moreLinks={
		<a className="grey-text text-lighten-4 right" href="#!"></a>
	}
	links={
		<ul>
			<li><a className="grey-text text-lighten-3" href="https://github.com/dbalkin77">Doug Balkin</a></li>
			<li><a className="grey-text text-lighten-3" href="https://github.com/jjconoscenti">JJ Conoscenti</a></li>
			<li><a className="grey-text text-lighten-3" href="https://github.com/colinmac17">Colin McAtee</a></li>
			<li><a className="grey-text text-lighten-3" href="https://github.com/mccarthinator">Katie McCarthy</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/lisamishra">Lisa Mishra</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/wjthornberry">Jake Thornberry</a></li>
		</ul>
	}
	className='example'
>
		<h5 className="white-text">PieceBroker</h5>
		<p className="grey-text text-lighten-4">What's your mouth up for?</p>
</Footer>
</Col>
        </Row>
        </div>
      );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
// export default Team;
export default App;
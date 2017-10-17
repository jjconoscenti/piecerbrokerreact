import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Row, Col, Card, CardTitle, Footer} from 'react-materialize';


class NewFooter extends Component {
    render() {
      return (
        <Row>
        <Col m={4} m={4}>
          <Footer copyrights="&copy 2017 Copyright PieceBroker"
	moreLinks={
		<a className="grey-text text-lighten-4 right" href="#!">Team Githubs</a>
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
</Footer>;
</Col>
        </Row>
      );
    }
}

ReactDOM.render(<NewFooter />, document.getElementById('root'));

// export default Team;

export default NewFooter;
import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import {Row, Col, Card, CardTitle} from 'react-materialize';

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
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// export default Team;

export default App;

import React from 'react'

import NavComponent from './components/NavComponent'
import RouterComponent from './components/RouterComponent'
import { Card, Container } from 'react-bootstrap';


export default class App extends React.Component {
  render() {
    return (
      <Container fluid="xl">
        <Container>

          <NavComponent user={null} />
        </Container>

        <Container>


          <RouterComponent />

        </Container>
      </Container>
    );
  }
}

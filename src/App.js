import React from 'react'

import NavComponent from './components/NavComponent'
import RouterComponent from './components/RouterComponent'
import { Card, Container } from 'react-bootstrap';


export default class App extends React.Component {
  render() {
    return (
      <Container fluid="xl">
        <Card>
      <NavComponent />
      <RouterComponent />
       </Card>
      </Container>
    );
  }
}

import React from 'react';
import { Container } from 'react-bootstrap';



export default class AboutPage extends React.Component{  
    render(){
        return(
           <>
           <Container>
          
            <div class="card-body">
              <h5 class="card-title">Product Inventory</h5>
              <p class="card-text">The proposed system should have provision to view the list of products and allow only the registered and authenticated users to add, edit, delete the products and view the product detail. The user interface to the system should be implemented using React. The data about the products should be managed in a JSON server. The client application should interface with the JSON Server through http to retrieve and store data.
</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <a href="/" class="card-link">Go to Home Page</a>
            
            </div>
          </Container>
          </>
        );
    }
}
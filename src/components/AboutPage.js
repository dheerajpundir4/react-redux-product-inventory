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
              <li class="list-group-item">Wherever list of records are viewed, there should be Search filter provided to only display a subset of records, so that user can quickly see it when there are many records to be viewed</li>
              <li class="list-group-item">While viewing product list, when different fields of the products are displayed, customization should be provided to display only a subset of the fields.</li>
              <li class="list-group-item">The details of the product which has been viewed often (through the “View Product detail”) is considered as a top viewed product. Provision should be there to display a chart of the top viewed products</li>
            </ul>
            <div class="card-body">
              <a href="/" class="card-link">Go to Home Page</a>
            
            </div>
          </Container>
          </>
        );
    }
}
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Products from "./components/product/Products";
import ProductDetail from "./components/product/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Row>
          <Col sm={{ span: 12 }}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about-us">
                <About />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route path="/products/:productID">
                <ProductDetail />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/404">
                <NotFound />
              </Route>
              <Route path="*">
                <Redirect to="/404" />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </BrowserRouter >

  );
}

export default App;

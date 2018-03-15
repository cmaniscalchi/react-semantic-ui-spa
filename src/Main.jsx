import React, { Component } from "react";
import {
  Container, Menu, Segment, Button
} from 'semantic-ui-react'
import {
  Route, NavLink, BrowserRouter
} from "react-router-dom";
import Home from "components/Home"
import Work from "components/Work"
import Company from "components/Company"
import Careers from "components/Careers"
import 'styling/semantic.less'

export default class Main extends Component {
  render () {
    return (
      <BrowserRouter basename='/'>
        <div>
          <Segment textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
            <Menu size='large'>
              <Container>
                <Menu.Item><NavLink className="item" exact to="/">Home</NavLink></Menu.Item>
                <Menu.Item><NavLink className="item" to="/Work">Work</NavLink></Menu.Item>
                <Menu.Item><NavLink className="item" to="/Company">Company</NavLink></Menu.Item>
                <Menu.Item><NavLink className="item" to="/Careers">Careers</NavLink></Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' >Log in</Button>
                  <Button as='a'  style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Container>
            </Menu>
            <div className="content">
              <Route path="/" exact component={Home} />
              <Route path="/Work" component={Work} />
              <Route path="/Company" component={Company} />
              <Route path="/Careers" component={Careers} />
            </div>
          </Segment>
        </div>
      </BrowserRouter>
    );
  }
}

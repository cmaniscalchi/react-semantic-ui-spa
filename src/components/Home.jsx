import PropTypes from 'prop-types'
import React, { Component } from "react";
import {
  Container, Segment, Header, Image
} from 'semantic-ui-react'
import icon from 'resources/logo.png'
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image size='large' src={icon} className='centered' />
    <Header size='huge' as='h1'>React Semantic-UI: SPA Boilerplate
    </Header>
    <Header size='small' as='h2' style={{fontWeight: 'normal', fontStyle: 'italic'}}>
      What's that you say?
    </Header>
    <p>With <a href="https://webpack.js.org/">Weback3</a>,
      <a href="https://yarnpkg.com">Yarn</a>, <a href="https://reactjs.org">React</a>,
      <a href="semantic-ui.com">Semanti-UI</a>, and
      <a href="https://reacttraining.com/react-router/web/guides/philosophy">
        React-Router</a> we can make magic!
    </p>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default class Home extends Component {
  render() {
    return (
      <div>
      <HomepageHeading />
      </div>
    )
  }
}

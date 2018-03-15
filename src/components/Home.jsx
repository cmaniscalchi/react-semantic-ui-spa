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
    <p>With Weback3, YARN, React, Semanti-UI, React-Router we can make magic!</p>
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

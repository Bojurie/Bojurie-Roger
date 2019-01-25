import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar'
import Showcase from './showcase';
import About from './about';
import Skill from './Skill';
import Portfolio from './portfolio';
import Contact from './contact';



class Home extends Component {

  componentDidMount() {

    const headerLinks = [
        {},
        {}
    ]

    const navbarLinks = [
        {
            _id: 0,
            title: 'Home',
            active: true,
            component: <Home/>
        },
        {
            _id: 1,
            title: 'About',
            active: false,
            component: <About/>
        },
        {
          _id: 2,
          title: 'Skills',
          active: false,
          component: <Skill/>
      },
      {
        _id: 3,
        title: 'Portfolio',
        active: false,
        component: <Portfolio/>
    },
    {
      _id: 4,
      title: 'Contact',
      active: false,
      component: <Contact/>
  },
    ]

    this.props.setHeaderLinks(headerLinks);
    this.props.setNavbarLinks(navbarLinks);
}

renderContent() {
    let jsx;
    if(this.props.navbarLinks) {
        this.props.navbarLinks.forEach(link => {
            if(link.active) {
                jsx = link.component;
            }
        })
    }
    return jsx;
}

  render() {
    return (
      <div className='home-layout'>
        {this.props.children}
        <Header/>
        <Navbar/>
        <Showcase/>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { headerLinks, navbarLinks } = state.headerNavbar;
  return { headerLinks, navbarLinks }
}

Home = connect(mapStateToProps, actions)(Home);

export default Home;

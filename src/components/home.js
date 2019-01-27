import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import About from './about';
import Skill from './skill';
import Portfolio from './portfolio';
import Contact from './contact';




class Home extends Component {
  

    componentDidMount(){

      const navbarLinks = [
        {
          _id: 0,
          title: 'Home',
          active: true,
          Component: <Home/>
        },
        {
          _id: 1,
          title: 'About',
          active: false,
          Component: <About/>

        },
        {
          _id: 2,
          title: 'Skills',
          active: false,
          Component: <Skill/>
        },
        {
          _id: 3,
          title: 'Portfolio',
          active: false,
          Component: <Portfolio/>
        },
        {
          _id: 4,
          title: 'Contact',
          active: false,
          Component: <Contact/>
        },
      ]

      this.props.setHeaderLinks([]);
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
      </div>
    );
  }
}
function mapStateToPorps(state) {
  const {navbarLinks} = state.headerNavbar;
  return { navbarLinks}
}

Home = connect(mapStateToPorps, actions)(Home);

export default Home;

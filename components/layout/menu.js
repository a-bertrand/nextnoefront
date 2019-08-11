import React from 'react';
import {MenuItem, Menu} from '@material-ui/core';
import CrossIcon from '@material-ui/icons/Clear';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link'
import {Router} from './../../routes'

export default class DrawerSimpleExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       active_item : 0
    };
  };
  handleClick (link_name) {
    Router.pushRoute(link_name)
  }
  render() {
    return (
      <>
        <span className="span-cross-close" > 
          <CrossIcon onClick={this.props.callBackClick}/> 
        </span>
        <div className="div-logo">
          <figure class="image">
            <img src="/static/images/logo.png" />
          </figure>
        </div>
        <div className="div-box">
            <a>Demander un devis </a>
        </div>
        <div className="box-link">
            <ul>
                <li onClick={this.handleClick.bind(this,'index')}>
                    <a>Acceuil</a>
                </li>
                <li onClick={this.handleClick.bind(this,'about')}>
                    <a>A propos</a>
                </li>
                <li onClick={this.handleClick.bind(this,'realisation')}>
                    <a>Réalisations</a>
                </li>
            </ul>
        </div>
        <Divider light />
        <div className="box-social-network">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div></div>
      </>
    );
  }
}
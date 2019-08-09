import React from 'react';
import {MenuItem, Menu} from '@material-ui/core';
import CrossIcon from '@material-ui/icons/Clear';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link'


export default class DrawerSimpleExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       active_item : 0
    };
  };
  
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
                <li>
                    <Link href="/">Acceuil</Link>
                </li>
                <li>
                    <Link href="/about">A propos</Link>
                </li>
                <li>
                    <Link href="/realisation">Réalisations</Link>
                </li>
                <li>
                    <Link href="/expertise">Expertises</Link>
                </li>
                <li>
                    <Link href="/about">Solutions</Link>
                </li>
                <li>
                    <Link href="/about">Contact</Link>    
                </li>
            </ul>
        </div>
        <Divider light />
        <div className="box-link">
          <ul>
              <li>
                  <Link href="/">Formations</Link>
              </li>
              <li>
                  <Link href="/about">A Ressources</Link>
              </li>
              <li>
                  <Link href="/realisation">Blog</Link>
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
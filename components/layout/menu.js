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
          <button className="box">
            Demander un devis 
          </button>
        </div>    
        <Link href="/">Acceuil</Link>
        <Link href="/about">A propos</Link>
        <Link href="/realisation">Réalisations</Link>
        <Link href="/expertise">Expertises</Link>
        <Link href="/about">Solutions</Link>
        <Link href="/about">Contact</Link>
        <Divider light />
        <MenuItem>
          <Link href="/about">Formations</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about">Ressources</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about">Blog</Link>
        </MenuItem>
        <Divider light />
        <div>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </>
    );
  }
}
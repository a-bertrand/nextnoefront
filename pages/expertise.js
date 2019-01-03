/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Layout from '../components/layout/index';
import ContentLayout from  '../components/content/layout';
import AboutContent from  '../components/content/about';

export default class Expertise  extends React.Component  {
  render(){
    return(
      <Layout>
        <ContentLayout img_url="static/images/subheader.png" title="Expertises">
           
        </ContentLayout>
      </Layout>
    )
  }
}
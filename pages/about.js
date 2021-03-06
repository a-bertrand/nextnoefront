import React from 'react';
import Layout from '../components/layout/index';
import ContentLayout from  '../components/content/layout';
import AboutContent from  '../components/content/about/index';

export default class About  extends React.Component  {
  render(){
    return(
      <Layout>
        <ContentLayout img_url="static/images/subheader.png" 
        title="Contactez moi" subtitle="présentation">
          <AboutContent />
        </ContentLayout>
      </Layout>
    )
  }
}
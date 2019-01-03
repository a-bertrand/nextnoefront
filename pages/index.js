/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HomeContent from '../components/content/home';
import Layout from '../components/layout/index';


export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <HomeContent />
      </Layout>
    );
  }
}

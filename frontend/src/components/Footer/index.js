import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="mt-4">
        <div className="col-sm-12">
          <p className="text-center">A Udacity React Nanodegree Project by <a href="https://davidlevai.com" alt="Dávid Lévai">Dávid Lévai</a></p>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {};

export default Footer;

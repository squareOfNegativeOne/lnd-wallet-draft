// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export default class Header extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <h3>Header</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/walletbalance">Wallet Balance</Link></li>
        </ul>
      </div>
    );
  }
}

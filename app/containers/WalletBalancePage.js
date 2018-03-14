// @flow
import React, { Component } from 'react';
import WalletBalance from '../components/WalletBalance/WalletBalance';

type Props = {};

export default class WalletBalancePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <WalletBalance />
    );
  }
}

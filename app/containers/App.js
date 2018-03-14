// @flow
import * as React from 'react';
import Header from '../components/Common/Header';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

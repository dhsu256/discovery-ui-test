/* @flow */
import * as React from 'react';
import styles from './style.css';

type Props = {
  id:string,
  value: string,
  placeholder: string,
  onTextUpdate: Function
}

type State= {
  value: string
}

class Input extends React.Component<Props, State> {
  state:State;

  constructor(props:Props) {
    super(props);
    this.state = {value: this.props.value};
  }

  onChange = (e:SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({value: e.target.value})
  }

  onBlur = () => {
    this.props.onTextUpdate(
      { value: this.state.value }
    )
  }

  render() {
    return (
      <input id={this.props.id} type="text" placeholder={this.props.placeholder} onBlur={this.onBlur.bind(this)} onChange={this.onChange} value={this.state.value} />
    )
  }
}


export default Input;
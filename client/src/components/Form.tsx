import React, { Component } from 'react';
import { FormProps, FormState } from '../models';

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleSubmit(e:any){
    this.props.onAddItem(this.state.name, e);
    this.setState({ name: '' });
  };

  handleInput(e: any){
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <form className="input-group" onSubmit={(e) => this.handleSubmit(e)}>
        <input
          className="form-control mr-4 "
          type="text"
          placeholder="Add Item"
          value={this.state.name}
          onChange={(e) => this.handleInput(e)}
        ></input>
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default Form;
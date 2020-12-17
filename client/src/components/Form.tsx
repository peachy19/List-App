import React, { Component } from 'react';
import { FormProps, FormState } from '../models';

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      name: ''
    };
  }

  onAddClicked(e:any){
    this.props.onAddItem(this.state.name, e);
    this.setState({ name: '' });
  };

  onResetClicked() {
    this.props.onResetClicked();
  }

  onValueChange(e: any){
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input type="text" value={this.state.name} className="form-control" placeholder='Add item' onChange={(e) => this.onValueChange(e)}/>
          </div>
          <div className="col">
            <div className="btn btn-primary form-control" onClick={(e) => this.onAddClicked(e)}>Add</div>
          </div>
          <div className="col">
            <div className="btn btn-primary form-control" onClick={() => this.onResetClicked()}>Reset</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
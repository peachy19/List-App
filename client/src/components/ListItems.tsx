import React, { Component } from 'react';
import Item from './Item';
import { ListItemsProps } from '../models';

class ListItems extends Component<ListItemsProps> {
  render() {
    let items = this.props.items.map((item) =>
      <Item item={item} onDeleteClicked={(id: number) => this.props.onDeleteClicked(id)}></Item>
    );

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <ul className="list-unstyled">    
              {items}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ListItems;
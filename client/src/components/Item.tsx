import React from 'react';
import { ItemProps } from '../models';

class Item extends React.Component<ItemProps> {
  constructor(props: ItemProps) {
    super(props);
  }

  render() {
    const item = this.props.item;

    return (
      <li key={item.id}>
        <div className="alert alert-dark fade show">
          <button className="close" onClick={() => this.props.onDeleteClicked(item.id)}>&times;</button>
          <span>{item.name}</span>
          
        </div>
      </li>
    )
  }
}

export default Item

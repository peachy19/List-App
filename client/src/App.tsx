import React from 'react';
import Form from './components/Form';
import ListItems from './components/ListItems';
import { ListState, ListItem } from './models';
import { getData, addItem, deleteItem, resetList, createList } from './services/api';

class List extends React.Component<{}, ListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [] as ListItem[]
    }
  }

  getListId = (): string => {
    const url = window.location.href;
    const urlArr = url.split('/');
    const id = urlArr[urlArr.length - 1];
    return id;
  }

  componentDidMount() {
    getData(this.getListId()).then(res => {
      this.setState({
        items: res.data
      });
    }).catch(async err => {
      if(err.response.status === 400) {
        const id = await createList();
        console.log(window.location);
        window.location.href = `${window.location.origin}/${id}`
        alert('New list has been created!')
      }
    })
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (JSON.stringify(prevState.items) !== JSON.stringify(this.state.items)) {
      getData(this.getListId()).then(res => {
        this.setState({
          items: res.data
        });
      });
    }
  }

  onAddItem = async (name: string, e: any) => {
    e.preventDefault();
    const id = await addItem(name, this.getListId());
    const newItem = {id, name}
    this.setState({
      items: [...this.state.items, newItem]
    });
  }

  onReset = async () => {
    const listId = this.getListId();
    await resetList(listId)
    this.setState({
      items: []
    });
  }

  onDeleteClicked = async (id: number) => {
    const list = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: list})
    deleteItem(id)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <Form onAddItem={this.onAddItem} onResetClicked={this.onReset}/>
              <ListItems items={this.state.items} onDeleteClicked={this.onDeleteClicked}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default List
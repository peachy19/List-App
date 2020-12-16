import Item from './item';

export default interface List {
  id: string;
  items: Array<Item>;
}

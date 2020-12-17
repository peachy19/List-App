export interface ListItem {
  id: number;
  name: string;
}

export type ListParams = { id: string };

/*
 * ======= states =======
 */

export interface ListState {
  items: ListItem[];
}

export interface FormState {
  name: string;
}

/*
 * ======= props =======
 */

export interface FormProps {
  onAddItem: (name: string, e: any) => void;
}

export interface ListItemsProps {
  items: ListItem[];
  onDeleteClicked: (id: number) => void;
}

export interface ItemProps {
  item: ListItem;
  onDeleteClicked: (id: number) => void;
}

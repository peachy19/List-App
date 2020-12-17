import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const getData = (id: string) => {
  return axios({ method: 'get', url: `${apiUrl}/${id}` });
};

const addItem = async (name: string, id: string): Promise<number> => {
  const res = await axios({
    method: 'post',
    url: `${apiUrl}/items`,
    data: {
      name,
      listId: id
    }
  }).catch(e => {
    throw new Error(e);
  });
  return res.data.id;
};

const deleteItem = async (id: number) => {
  await axios({
    method: 'delete',
    url: `${apiUrl}/items/${id}`
  }).catch(e => {
    throw new Error(e);
  });
};

export { addItem, deleteItem, getData };

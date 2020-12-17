import { Request, Response } from 'express';
import cors from 'cors';
import { Router } from 'express';
import { ItemsService } from '../services/ItemsService';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, listId } = req.body;
    if (!name || !listId) {
      console.log('Either name or listId is not provided');
      return res.sendStatus(400);
    }
    await ItemsService.create(name, listId).catch(err => {
      console.log('db error', err);
      return res.sendStatus(500);
    });
    return res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ItemsService.delete(+id).catch(err => {
      console.log('db error', err);
      return res.sendStatus(500);
    });
    return res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

export default router;

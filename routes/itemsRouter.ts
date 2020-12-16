import { Request, Response } from 'express';
import { Router } from 'express';
import { ItemsService } from '../services/ItemsService';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { name, listId } = req.body;
  await ItemsService.create(name, listId);
  return res.sendStatus(201);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await ItemsService.delete(+id);
  return res.sendStatus(200);
});

export default router;

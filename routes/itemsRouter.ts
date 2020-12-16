import { Request, Response } from 'express';
import { Router } from 'express';
import { ItemsService } from '../services/itemsService';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const result = await ItemsService.get();
  return res.send(result);
});

router.post('/', async (req: Request, res: Response) => {
  const result = await ItemsService.create(req.body.name);
  return res.sendStatus(201);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const result = await ItemsService.delete(+req.params.id);
  return res.sendStatus(200);
});

export default router;

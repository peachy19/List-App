import { Request, Response } from 'express';
import { Router } from 'express';
import { ListService } from '../services/ListService';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
  const result = await ListService.getListById(req.params.id);
  return res.send(result);
});

router.post('/', async (req: Request, res: Response) => {
  await ListService.create(req.body.name);
  return res.sendStatus(201);
});

router.delete('/:id', async (req: Request, res: Response) => {
  await ListService.reset(req.params.id);
  return res.sendStatus(200);
});

export default router;

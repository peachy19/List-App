import { Request, Response } from 'express';
import { Router } from 'express';
import { ListService } from '../services/ListService';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const result = await ListService.getListById(req.params.id).catch(err => {
      console.log('db error', err);
      return res.sendStatus(500);
    });
    return res.send(result);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      console.log('name is not provided');
      return res.sendStatus(400);
    }
    await ListService.create(name).catch(err => {
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
    await ListService.reset(req.params.id).catch(err => {
      console.log('db error', err);
      return res.sendStatus(500);
    });
    return res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

export default router;

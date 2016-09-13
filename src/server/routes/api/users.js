import { Router } from 'express';
import User from '../../models/user';

export default () => {
    let router = Router();

    router.get('/', (req, res) => {
        res.json({ 'hello' : 'user' });
    });

    router.get('/:userId', (req, res) => {
        res.json({ 'id' : req.params.userId });
    });

    return router;
}

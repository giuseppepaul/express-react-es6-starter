import { Router } from 'express';

export default () => {
    let router = Router();

    router.get('/', (req, res) => {
        res.render('index');
    });

    return router;
}

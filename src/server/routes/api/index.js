import { Router } from 'express';
import users from './users';

export default () => {
    let api = Router();

    // Resources
    api.use('/users', users());

    return api;
}

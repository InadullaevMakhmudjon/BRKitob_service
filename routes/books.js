import { Router } from 'express';
import books from '../controller/books';
import validationBook, { create, update } from '../utils/validations/books';

const router = Router();

router.get('/', books.getAll);
router.get('/:id', books.get);
router.post('/', create, validationBook, books.create);
router.post('/:id', update, validationBook, books.update);

export default router;

import express from 'express';
import {getPhotos} from '../controllers/photos.js';


const router = express.Router();

// All Product Route
router.get('/', getPhotos);

// // Create Product Route
// router.post('/', createPhoto);

// // Update Product Route
// router.patch('/:id', updatePhoto);

// // Delete Product Route
// router.delete('/:id', deletePhoto);


// export default router;
import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title: String,
    creator: String,
    message: String,
    tags: [String],
    selectedFile: String,
    countInStock: {
        type:Number,
        default:0
    },
    numReviews: {
        type:Number,
        default:0
    },

});

const postProduct = mongoose.model('Product', productSchema);

export default postProduct;
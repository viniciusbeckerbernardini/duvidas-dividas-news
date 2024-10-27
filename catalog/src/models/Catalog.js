import mongoose from 'mongoose';

const CatalogSchema = new mongoose.Schema({
  ISBN: {
    type: String,
    unique: true
  },
  title: {
    type: String,
  },
  authors: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  categories: {
    type: Array,
    default: Date.now,
  },
  pageNumbers: {
    type: String
  },
  publishDate: {
    type: String,
  },
  publisher: {
    type: String,
  }
});

const Catalog = mongoose.model('catalog', CatalogSchema);
export default Catalog;

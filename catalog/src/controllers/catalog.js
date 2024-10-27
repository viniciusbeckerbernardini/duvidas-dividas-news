import Catalog from "../models/Catalog.js";

class CatalogController {

  static list = async (req,res) => {
    try {
      const catalog = await Catalog.find();
      return res.status(201).json({ catalog });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

  static find = async (req,res) => {
    try {
      const {isbn} = req.params;

      const book = await Catalog.findOne({ isbn: isbn });

      return res.status(201).json({book});
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }

}

export default CatalogController;

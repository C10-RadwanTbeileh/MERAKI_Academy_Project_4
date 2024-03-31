const ProductModel = require("../models/product");

const createNewProduct = (req, res) => {
  const { availability, title, price, description, size, image, categoriesId } =
    req.body;
  const newProduct = new ProductModel({
    availability,
    title,
    price,
    description,
    size,
    image,
    categoriesId,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Product created`,
        categories: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const getProductByCategoriesId = (req,res)=>{
    const id = req.params.id;
    
    ProductModel
    .findOne({categoriesId:id})
    .then((result) => {
        if (!result) {
            return res.status(404).json({
              success: false,
              message: `Product By This Categories not found`,
            });
          }
      res.status(201).json({
        success: true,
        message: `Product `,
        product : result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
}

const getProductById = (req,res)=>{

}

const upDateProductById = (req,res)=>{}

const deleteProductById = (req,res)=>{}



module.exports = { createNewProduct,getProductByCategoriesId, getProductById,upDateProductById,deleteProductById};

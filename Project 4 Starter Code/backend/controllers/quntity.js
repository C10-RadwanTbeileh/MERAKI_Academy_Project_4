



const upDateCartDecByUserId = (req, res) => {
    const {productID,quantity} = req.body;
    console.log(req.token.userId);
    const id = req.token.userId;
  
    
    // const filter ={userId:id ,products:_id}
    // const update={ products:req.body}
    
  CartModel.findOneAndUpdate({userId:id,"products._id":productID},{$set:{"products.$.quantity":quantity}},{new:true})

      .then((result) => {
        if (!result) {
            // create new prod/>> new cart 
          return res.status(404).json({
            success: false,
            message: `Product or Cart  not found`,
          });
        }
        console.log(result)
        res.status(200).json({
          success: true,
          message: `Product upDate`,
          products: result,
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

const upDateCartIncByUserId = (req, res) => {
    const {productID} = req.body;
    console.log(req.token.userId);
    const id = req.token.userId;
  
    
    const filter ={userId:id,product:productID}
    const update={ $inc:{quantity:1}}
  CartModel.findOneAndUpdate(filter,update,{new:true})

      .then((result) => {
        if (!result) {
            // create new prod/>> new cart 
          return res.status(404).json({
            success: false,
            message: `Product or Cart  not found`,
          });
        }
        res.status(200).json({
          success: true,
          message: `Product upDate`,
          products: result,
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



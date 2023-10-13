const mongoose = require("mongoose");
const express=require("express");
const { Product } = require("../modals/product");
const router = express.Router();



router.post("/",  async (req, res) => {
  
  let product = new Product ({
    productname: req.body.productname,
    productdescription: req.body.productdescription,
    quantity: req.body.quantity,
    grams: req.body.grams,  
    price : req.body.price,
  });
  product = await product.save();

  if (!product) return res.status(500).send("The product is not added");
  res.status(200);

  res.send(product);
  res.end()

});

router.put("/:id",  async (req, res) => {
  let product = await Product.findByIdAndUpdate(
    req.params.id,
    {
        
    productname: req.body.productname,
    productdescription: req.body.productdescription,
    quantity: req.body.quantity,
    grams: req.body.grams,  
    price : req.body.price,   
    },
    { new: true }
    );
    if (!product) return res.status(500).send("The product is not placed");

    res.send(product);
  });
  router.get('/',  async(req,res)=>{
    console.log(req)
      let product= await Product.find()
  
      if(!product) 
      return res.status(500).send('The product is not added')
      //console.log(blogs)
  
      res.send(product);
      console.log(product)
  
      })
      router.delete('/:id',async(req,res)=>{
        let product = await Product.findByIdAndDelete(req.params.id);
           if(!product) 
           return res.status(500).send('The product is deleted')
        res.send(product)
           });
       
   
   module.exports = router;

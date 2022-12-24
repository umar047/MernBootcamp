var express = require('express');
var router = express.Router();
const { usersController } = require ('../controllers');
/* GET users listing. */

  router.get('/', async function(req, res, next) {
    // res.send('respond with a resource');
    const query = req.query;
    console.log(query);
    try {
       const result = await usersController.getAllUsers(query);
       res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.post('/', async function(req, res, next) {
    // res.send('respond with a resource');
    const body = req.body;
    // console.log(query)
    try {
       const result = await usersController.addUser(body);
       res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });

      router.delete('/:id', async function (req,res, next){

        const id = req.params.id;
        try{
        
        const filter={_id:id};
        const result =await usersController.deleteUser(filter);
        res.status(200).send('Delete Successfully');
        }
        catch (error)
        {
        res.status(500).send(error);
        }
      
  });
  
  module.exports = router;
  





const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//Grabs all categories
router.get('/', async (req, res) => {
  try {
    //grabs all categories and their products
    const categories = await Category.findAll({
      include: [Product],
    });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//Grabs a single category by id
router.get('/:id', async (req, res) => {
  try {
    //Grabs one category specified by its id and the products the category has
    const category = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error){
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//Creats a new category
router.post('/', async (req, res) => {
  try {
    //creates a new category given the req.body
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//updates a category by its id
router.put('/:id', async (req, res) => {
  try {
    //grabs a single category specified by its id
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    //updates the category with the req.body
    await category.update(req.body);
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Servor Error' });
  }
});

//deletes a category by its id
router.delete('/:id', async (req, res) => {
  try {
    //finds a cetegory by specified id
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    //deletes the specified category 
    await category.destroy();
    res.json({ message: 'Category deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//grabs all tag and their products
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        { model: Product, through: ProductTag, }
      ],
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//grabs a single tag 
router.get('/:id', async (req, res) => {
  try {
    //grabs a single tag by the specified if and the tag's product
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product, through: ProductTag, },
      ],
    });
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//creates a new tag
router.post('/', async (req, res) => {
  try {
    //creates a new tag given the req.body
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//updates a tag
router.put('/:id', async (req, res) => {
  try {
    //grabs a tag given the specified id 
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    //updates the specified id with the req.body
    await tag.update(req.body);
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//deletes a tag
router.delete('/:id', async (req, res) => {
  try {
    //grabs a tag by the specified id 
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    //deletes the tag specified
    await tag.destroy();
    res.json({ message: 'Tag deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
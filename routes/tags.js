const express= require ('express');
const blogTags = require('../data/tags');
const posts = require ('../data/posts');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
    res.json(blogTags);
  });

// Get a list of comments
router.get('/:tagId/posts', (req, res) => {
  const tagId = Number(req.params.tagId);
  // Keep only comments whose post_id matches the postId parameter
  const postTags = posts.filter(post => post.tag_ids.includes(tagId));
  return res.json(postTags);
  
});




module.exports = router;
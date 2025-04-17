let express = require("express");
let router = express.Router();
let Controllers = require ("../controllers");

router.get('/', (req,res) => {
    Controllers.likeController.getLike(res);
});

router.post('/create', (req, res) => {
    Controllers.likeController.createLike(req.body, res);
})

module.exports = router;
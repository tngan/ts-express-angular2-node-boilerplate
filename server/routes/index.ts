'use strict';

import * as express from 'express';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

export = router;
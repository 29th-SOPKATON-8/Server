const express = require('express');
const router = express.Router();

router.get('/suggest/:id', require('./suggestIdGET')); //?จ๊ณ๋ณ ์ง๋ฌธ ? ? ์กฐํ

module.exports = router;
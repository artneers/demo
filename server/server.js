const fs = require('fs')
const express = require('express')
const app = express()

// 获取某一页的pdf文件流
app.get('/pdf/:page', async (req, res) => {
  const pdf = fs.readFileSync(`file-${+req.params.page}.pdf`)
  res.setHeader('totalPage', 14)
  res.send(pdf)
})

// 启动服务器
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
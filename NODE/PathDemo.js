const path = require('path')

//normalize path
ans = path.normalize("/abc/../xyz/../node")
console.log(ans)

//join path
ans=path.join("/abc/xyz/","/def/vbn")
console.log(ans)

//resolve path
ans = path.resolve("./NPM.js")
console.log(ans)

//relative path
ans = path.relative("./NPM.js","./FsDemo.js")
console.log(ans)

//dirname path
ans = path.dirname("C:\\Users\\yes\\Desktop\\SEM 3\\WT PRACTICE LAB\\NODE\\FsDemo.js")
console.log(ans)

//basename path
ans = path.basename("C:\\Users\\yes\\Desktop\\SEM 3\\WT PRACTICE LAB\\NODE\\FsDemo.js")
console.log(ans)

//extname path
ans = path.extname("C:\\Users\\yes\\Desktop\\SEM 3\\WT PRACTICE LAB\\NODE\\FsDemo.js")
console.log(ans)
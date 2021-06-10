let str = ''
with (xxx) {
  str += `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    wsn
    `
  arr.forEach((item) => {
    str += `
        <li>${item}</li>
    `
  })
  str += `

    18
    
</body>
</html>`
}
return str

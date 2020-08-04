const express = require('express')
const { spawn } = require('child_process')
const app = express()
const port = 3000
let v=0
app.get('/', (req, res) => {
  let dataToSend
  let largeDataSet = []
  let python = null
  if (v==0){
    v=1
    console.log('liht On!')
    python = spawn('python', ['lighton.py'])
  }else{
    v=0
    console.log('liht Off!')
    python = spawn('python', ['lightoff.py'])
  }
  

  python.stdout.on('data', function (data) {
    
    largeDataSet.push(data)
  })

  python.on('close', (code) => {
    res.send(largeDataSet.join(''))
  })
})

app.listen(port, () => {
  console.log('h')
})

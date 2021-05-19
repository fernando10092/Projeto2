const caminho = "/Users/Samsung/Downloads/";

const fs = require('fs');

fs.readdir(caminho, (err, arqui)=>{
    arqui.forEach(arquivo => {
        console.log(arquivo);
    });
});
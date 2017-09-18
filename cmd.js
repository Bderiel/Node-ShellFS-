const fs = require('fs');
function pwd(){
process.stdout.write(process.cwd());
process.stdout.write('\nprompt > ');
}

function date(){
process.stdout.write(Date()); 
process.stdout.write('\nprompt > ');
}
function ls(){
    fs.readdir('.', function(err, filenames) {
        if (err) throw err
        filenames.forEach(file=>{
            process.stdout.write(file + '\n');
        });
        process.stdout.write('\nprompt > ');
    });
    
}

module.exports = {
    pwd:pwd,
    date:date,
    ls: ls
};

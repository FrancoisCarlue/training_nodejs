app.get('/callback', function(req,res){

    var returnResponseOfFileJson = function (content){
        res.json(content);
    };

    fs.readFileAsync('test.json')
        .then(logContentOfFile)
        .then(JSON.parse)
        .then(returnResponseOfFileJson)
    ;

    console.log('autre chose');
});

function logContentOfFile(content){
    console.log(content);
    return content;
}
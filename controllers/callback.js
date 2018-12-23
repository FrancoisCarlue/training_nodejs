/**
 * Index Action
 *
 * @param req
 * @param res
 */

exports.index = function(req,res){

    var returnResponseOfFileJson = function (content){
        res.json(content);
    };

    fs.readFileAsync('test.json')
        .then(logLib.logContentOfFile)
        .then(JSON.parse)
        .then(returnResponseOfFileJson)
    ;

    console.log('autre chose');
};
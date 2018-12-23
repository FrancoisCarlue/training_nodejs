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

    var returnError = function () {
        res.status(500).send('le fichier est manquant');
    };

    fs.readFileAsync('test.json')
        .then(logLib.logContentOfFile)
        .then(JSON.parse)
        .catch(logLib.throwError)
        .done(returnResponseOfFileJson, returnError)
    ;

    console.log('autre chose');
};
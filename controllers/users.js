exports.index = function (req,res) { //affichage d'une collection de la BDD
    var returnReponse = function(collection){
        res.json(collection);
    }

    //on doit préparer la collection à l'avance, impossible de l'executer en Async directement
    // donc on chaine toutes nos taches pour préparer la collection puis on fait un execAsync
    models.User.find().sort({name:1}).select('name age').execAsync() //noms triés dans l'odre alphabétique, seulement le nom et l'age
        .then(logLib.logContent)
        .then(returnReponse)
    ;
};

exports.one = function (req,res){
    var returnResponse = function(obj){
        res.render('user',{user :obj});
    };

    var options = {name:req.params.name}; //recup d'un user en fonction du parametre passé en URL de routage

    models.User.findOneAsync(options)
        .then(logLib.logContent)
        .then(returnResponse)
    ;
};

exports.create = function(req,res){
    var returnResponse = function (obj) {
        res.json(obj);
    };

    var user = models.User(req.body).saveAsync()
        .then(logLib.logContent)
        .then(returnResponse);
}

exports.update = function(req,res){
    var returnResponse = function (obj) {
        res.json(obj);
    };

    var options = {_id : req.body._id};

    var returnUpdatedObject = function () {
        models.User.findOneAsync(options)
            .then(logLib.logContent)
            .then(returnResponse)
        ;
    };

    delete req.body['_id'];

    models.User.findOneAndUpdateAsync(options, req.body)
        .then(returnUpdatedObject);
}

exports.delete = function(req,res){
    var returnResponse = function (obj) {
        res.json({message : 'All is fine'});
    };

    var returnError = function(obj){
        res.status(500).json({message: 'SERVER PROBLEM'})
    };

    var options = {_id:req.params.id};

    models.User.findOneAndRemoveAsync(options)
        .catch(logLib.throwError)
        .done(returnResponse, returnError);
}
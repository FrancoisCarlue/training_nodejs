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
    var options = {name:req.params.name}; //recup d'un user en fonction du parametre passé en URL de routage
    var returnReponse = function(obj){
        res.json(obj);
    }

    models.User.findOneAsync(options)
        .then(logLib.logContent)
        .then(returnReponse)
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
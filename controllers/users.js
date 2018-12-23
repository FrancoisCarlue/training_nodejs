exports.index = function (req,res) { //afficha d'une collection de la BDD
    var returnReponse = function(obj){
        res.json(obj);
    }

    models.User.findAsync()
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
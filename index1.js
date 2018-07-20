const validateRequest = require('../validation/request-validator');
const validationSchema = require('../validation/validationSchema');

module.exports = function(sequelize,server){
    const userpersonals = require('../models/userpersonals')(sequelize);


    server.get('/',function(req,res,next) {
        userpersonals.findAll().then(function(data){
            res.send(data);
        })
        .catch(function(err){
            res.send(err);
        })  
        return next();
    });

    server.get('/:id',function(req,res,next){
        const id = req.params.id;
        userpersonals.findById(id).then(function(data){
            res.send(data);
        })
        .catch(function(err){
            res.send(err);
        })
    });

    server.post('/', validateRequest(validationSchema.userpersonals), function(req,res){

        userpersonals.findAll().then(function(users){                   //Validation fOR DUPLICATE enteries.
            if(users && users.length > 0){
                const userfound = users.find(user => user.userName === req.body.userName || user.regNumber === req.body.regNumber);
                if(userfound){
                    res.send({error: 'Duplicate userName or regNumber.'});
                }
                else{
                    var userpersonal = userpersonals.build({
                        uuid: req.body.uuid,
                        userName: req.body.userName,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        regNumber: req.body.regNumber,
                        dob: req.body.dob,
                        gender: req.body.gender,
                        mobileNumber: req.body.mobileNumber,
                        userBio: req.body.userBio,
                    });
                    userpersonal.save().then(function(data){
                        res.send(data);
                    })
                    .catch(function(err){
                        res.send(err);
                    })    
                }
            }
        });

    });

    server.put('/:id', validateRequest(validationSchema.userpersonals), function(req,res){

        userpersonals.findAll({}).then(function(users){                   //Validation fOR DUPLICATE enteries.
            if(users && users.length > 0){
                const userfound = users.find(user => (user.userName === req.body.userName || user.regNumber === req.body.regNumber) && user.id.toString() !== req.params.id);
                if(userfound){
                    res.send({error: 'Duplicate userName or regNumber.'});
                }
                else{
                    userpersonals.findById(req.params.id).then(function(user) {
                        user.uuid = req.body.uuid;
                        user.userName = req.body.userName;
                        user.firstName = req.body.firstName;
                        user.lastName = req.body.lastName;
                        user.regNumber = req.body.regNumber;
                        user.dob = req.body.dob;
                        user.gender = req.body.gender;
                        user.mobileNumber = req.body.mobileNumber;
                        user.userBio = req.body.userBio;
                        user.save().then(function(data){
                            res.send(data);
                        })
                        .catch(function(err){
                            res.send(err);
                        })    
                    }).catch(function(err) {
                        res.send({error: `user not found with id ${req.params.id}`});
                    })
                }
            }
        });
    });

    server.del('/:id',function(req,res){
        userpersonals.findById(req.params.id).then(function(user) {
            user.destroy().then(function(data){
                res.send(data);
            })
            .catch(function(err){
                res.send(err);
            })    
        }).catch(function(err) {
            res.send({error: `user not found with id ${req.params.id}`});
        })
    });
}
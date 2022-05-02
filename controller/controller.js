const Model = require ('../model/model')
class controller {
    FindResponce (req, res) {
        const Request = req.params.quest
        Model
            .find ({quest: Request})
            .then (db    => res.send (db))
            .catch(error => console.log(error))
    }
    GetNewAnswer (req, res) {

    }
    DeleteAnswer (req, res) {

    }
}
module.exports = new controller ();
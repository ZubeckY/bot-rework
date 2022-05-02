const Router = require ('express');
const controller = require ('../controller/controller');
const router = new Router ();

router.get  ('/quest/:quest', controller.FindResponce)
router.post ('/get-new-anwser/:quest', controller.GetNewAnswer);
router.post ('/delete-answer/:quest', controller.DeleteAnswer);

module.exports = router;
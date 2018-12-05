const db = require('../config/db.config.js');
const Child = db.child;

exports.findAll = (req, res) => {
    Child.findAll({
        attributes: [['id', 'id'], 'name', ['date_birth', 'dateBirth'], 'photo', ['mother_name', 'motherName'], ['father_name', 'fatherName']]
    }).then(children => {
        res.send(children);
    });
};

exports.findById = (req, res) => {
	Child.findAll({
		where: {
			id: req.params.id
		  }
	}).then(child => {
	   res.send(child);
	});
};

exports.save = (req, res) => {
    Child.create({
        "name": req.body.name,
        "date_birth": req.body.dateBirth,
        "mother_name": req.body.motherName,
        "father_name": req.body.fatherName,
        "photo": req.body.photo
    }).then(child => {
        res.json(child);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.delete = (req, res) => {
    Child.destroy({
        where: {
            id: req.body.id
        }
    }).then(child => {
        res.json("ok");
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.update = (req, res) => {
    Child.update(
        {
            "name": req.body.name,
            "date_birth": req.body.dateBirth,
            "mother_name": req.body.motherName,
            "father_name": req.body.fatherName,
        },
        {
            where: {
                id: req.body.id
            }
        }
    ).then(child => {
        res.json(child);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};
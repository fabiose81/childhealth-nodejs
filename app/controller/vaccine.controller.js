const db = require('../config/db.config.js');
const Vaccine = db.vaccine;

exports.findAll = (req, res) => {
	Vaccine.findAll({
		attributes: [['id', 'id'], 'name']
	}).then(vaccines => {
	   res.send(vaccines);
	});
};

exports.findById = (req, res) => {
	Vaccine.findAll({
		where: {
			id: req.params.id
		  }
	}).then(vaccine => {
	   res.send(vaccine);
	});
};

exports.save = (req, res) => {
    Vaccine.create({
        "name": req.body.name
    }).then(vaccine => {
        res.json(vaccine);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.delete = (req, res) => {
	Vaccine.destroy({
		 where: {
			  id: req.body.id
			}
	}).then(vaccine => {
		 res.json("ok");
	}).catch(err => {
		 console.log(err);
		 res.status(500).json({ msg: "error", details: err });
	});
};

exports.update = (req, res) => {
	Vaccine.update(
		 {
			  "name": req.body.name,
		 },
		 {
			  where: {
					id: req.body.id
			  }
		 }
	).then(vaccine => {
		 res.json(vaccine);
	}).catch(err => {
		 console.log(err);
		 res.status(500).json({ msg: "error", details: err });
	});
};
const db = require('../config/db.config.js');
const VaccineHistory = db.vaccineHistory;

exports.findAll = (req, res) => {
    VaccineHistory.findAll({
		attributes: [['id', 'id'], 'date', 'weight', 'height', 'comment', 'id_child' , 'id_vaccine']
    }).then(vaccineHistories => {
        res.send(vaccineHistories);
    });
};

exports.findById = (req, res) => {
	VaccineHistory.findAll({
		where: {
			id: req.params.id
		  }
	}).then(vaccineHistory => {
	   res.send(vaccineHistory);
	});
};

exports.findByChild = (req, res) => {
	db.sequelize.query("SELECT vh.id, vh.date, vh.weight, vh.height, vh.comment, v.id as vaccine_id, v.name as vaccine_name FROM vaccine_history vh "+
					   "JOIN vaccine v ON vh.id_vaccine = v.id join child c ON vh.id_child = c.id WHERE vh.id_child = :id", 
									
					   { replacements: { id: req.params.id }, type: db.sequelize.QueryTypes.SELECT }
										  
	).then(vaccineHistories => {
	  res.send(vaccineHistories);
	})
};

exports.save = (req, res) => {
    VaccineHistory.create({
        "date": req.body.date,
        "weight": req.body.weight,
        "height": req.body.height,
        "comment": req.body.comment,
		"id_vaccine": req.body.vaccine.id,
		"id_child": req.body.child.id
    }).then(vaccineHistory => {
        res.json(vaccineHistory);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.delete = (req, res) => {
	VaccineHistory.destroy({
		 where: {
			  id: req.body.id
			}
	}).then(vaccineHistory => {
		 res.json("ok");
	}).catch(err => {
		 console.log(err);
		 res.status(500).json({ msg: "error", details: err });
	});
};

exports.update = (req, res) => {
	VaccineHistory.update(
		 {
            "date": req.body.date,
            "weight": req.body.weight,
            "height": req.body.height,
            "comment": req.body.comment,
			"id_vaccine": req.body.vaccine.id,
			"id_child": req.body.child.id
		 },
		 {
			  where: {
					id: req.body.id
			  }
		 }
	).then(vaccineHistory => {
		 res.json(vaccineHistory);
	}).catch(err => {
		 console.log(err);
		 res.status(500).json({ msg: "error", details: err });
	});
};
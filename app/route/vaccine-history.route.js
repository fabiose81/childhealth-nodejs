module.exports = function(app) {
 
    const vaccineHistory = require('../controller/vaccine-history.controller.js');
 
    app.get('/api/vaccine-history/findAll', vaccineHistory.findAll);

    app.get('/api/vaccine-history/findById/:id', vaccineHistory.findById);

    app.get('/api/vaccine-history/findByChild/:id', vaccineHistory.findByChild);

    app.post('/api/vaccine-history/save', vaccineHistory.save);

    app.post('/api/vaccine-history/delete', vaccineHistory.delete);

    app.put('/api/vaccine-history/update', vaccineHistory.update);
    
}
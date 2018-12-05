module.exports = function(app) {
 
    const vaccine = require('../controller/vaccine.controller.js');
 
    app.get('/api/vaccine/findAll', vaccine.findAll);

    app.get('/api/vaccine/findById/:id', vaccine.findById);

    app.post('/api/vaccine/save', vaccine.save);

    app.post('/api/vaccine/delete', vaccine.delete);

    app.put('/api/vaccine/update', vaccine.update);
    
}
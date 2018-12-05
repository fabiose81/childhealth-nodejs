module.exports = function(app) {
 
    const child = require('../controller/child.controller.js');
 
    app.get('/api/child/findAll', child.findAll);

    app.get('/api/child/findById/:id', child.findById);

    app.post('/api/child/save', child.save);

    app.post('/api/child/delete', child.delete);

    app.put('/api/child/update', child.update);
    
}
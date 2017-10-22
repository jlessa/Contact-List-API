var should = require('should'),
    request = require('supertest'),
    app = require('../index.js'),
    mongoose = require('mongoose'),
    Contact = mongoose.model('Contact'),
    agent = request.agent(app);

describe('Contact Crud Test', function () {
    it('Should allow a contact to be posted and return a read and _id', function (done) {
        var contactPost = {
            name: 'Jeff',
            phone: '555',
            email: 'teste@contact.com'
        };

        agent.post('/api/contacts')
            .send(contactPost)
            .expect(200)
            .end(function (err, results) {                
                results.body.should.have.property('_id');
                done()
            })
    })

    afterEach(function (done) {
        Contact.remove().exec();
        done();
    })
})
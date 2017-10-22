var should = require('should');
var sinon = require('sinon');


describe('Contact Controller Tests:', function () {

    describe('Post', function () {
        it('should not allow an empty name on contact', function () {
            var Contact = function (contact) {
                this.save = function () {}
            };
            var req = {
                body: {
                    phone: '555'
                }
            }

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var contactController = require('../controllers/contactController')(Contact);
            contactController.post(req, res);

            res.status.calledWith(400).should.equal(true);
            res.send.calledWith('Name is required').should.equal(true);

        });
    });
});
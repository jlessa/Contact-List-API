var express = require('express');
var mongoose = require('mongoose');

var routes = function (Contact) {
    var contactRouter = express.Router();
    var contactController = require('../controllers/contactController')(Contact);
    contactRouter
        .route('/')
        .get(function (req, res) {
            contactController.get(req, res);
        })
        .post(function (req, res) {
            contactController.post(req, res);
        });

    contactRouter
        .route('/addContact/:contactId')
        .post(function (req, res) {
            contactController.addContact(req, res);
        });

    contactRouter
        .route('/removeContact/:contactId')
        .post(function (req, res) {
            contactController.removeContact(req, res);
        });

    contactRouter.use('/:contactId', function (req, res, next) {
        Contact.findById(req.params.contactId, function (err, contact) {
            if (err)
                res.status(500).send(err);
            else if (contact) {
                req.contact = contact;
                next();
            } else {
                res.status(404).send('no record found');
            }
        })
    });

    contactRouter
        .route('/:contactId')
        .get(function (req, res) {
            res.json(req.contact);
        })
        .put(function (req, res) {
            req.contact.name = req.body.name;
            req.contact.phone = req.body.phone;
            req.contact.email = req.body.email;
            req.contact.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(req.contact);
            });
        })
        .patch(function (req, res) {
            if (req.body._id) delete req.body._id;
            for (var p in req.body) {
                req.contact[p] = req.body[p];
            }
            req.contact.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(req.contact);
            });
        })
        .delete(function (req, res) {
            req.contact.remove(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Record Deleted');
            });
        });
    return contactRouter;
};

module.exports = routes;
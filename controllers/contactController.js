var contactController = function (Contact) {

    var get = function (req, res) {
        var query = {};

        //Get Contact by Name passing parameter 'name'
        if (req.query.name) {
            query.name = req.query.name
        }

        Contact.find(query, function (err, contacts) {
            if (err)
                res.status(500).send(err);
            else
                res.json(contacts);
        })
    };

    var post = function (req, res) {
        var contact = new Contact(req.body);

        if (!req.body.name) {
            res.status(400);
            res.send('Name is required');
        } else {
            contact.save();
            res.status(201);
            res.send(contact);
        }

    };

    var addContact = function (req, res) {
        Contact.findById(req.params.contactId, function (err, contact) {
            if (!contact)
                res.status(404).send('Contact not Found');
            else {
                //Check if added contact exists                
                Contact.findById(req.body._id, function (err, newContact) {
                    if (newContact) {
                        contact.contacts.push(
                            newContact
                        );

                        contact.save(function (err) {
                            if (err)
                                res.status(500).send(err);
                            else
                                res.json(contact);
                        });

                    }
                });
            }
        });
    };

    var removeContact = function (req, res) {

        Contact.findById(req.params.contactId, function (err, contact) {
            if (!contact)
                res.status(404).send('Contact not Found');
            else {

                var remove = [];

                for (var i in contact.contacts) {
                    if (contact.contacts[i]._id == req.body._id)
                        remove.push(contact.contacts[i]);
                }

                if (remove.length > 0) {
                    contact.contacts = contact.contacts.filter(function (element) {
                        return element._id !== remove[0]._id;
                    });
                }

                contact.save(function (err) {
                    if (err)
                        res.status(500).send(err);
                    else
                        res.json(contact);
                });

            }
        });
    };

    return {
        get: get,
        post: post,
        addContact: addContact,
        removeContact: removeContact
    }
};

module.exports = contactController;
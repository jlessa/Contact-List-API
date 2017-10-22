# Contact List Project

You must have a local mongodb running to this API works.
If you already have mongodb installed, run:

```
mongod
```

This Project uses gulp as task manager.
To run this project run:
```
npm start
gulp test
gulp 
```
To Access the App use the url:

http://localhost:3000

This API usues the following methods:

- List Users 
```
GET: http://localhost:3000/api/contacts
```
- Add New User 
```
POST: http://localhost:3000/api/contacts with JSON as Body
```
<p align="center">
  <img src="https://github.com/jlessa/Contact-List-API/blob/master/public/images/add_user.png" width="350"/>  
</p>

- Delete User 
```
DELETE: http://localhost:3000/api/contacts/:contactId
```
- Update Full User Object 
```
PUT: http://localhost:3000/api/contacts/:contactId with JSON as Body
```
- Update Needed Property User Object 
```
PATCH: http://localhost:3000/api/contacts/:contactId with JSON as Body
```
- List Single User 
```
GET: http://localhost:3000/api/contacts/:contactId
```
- Add Contacts to User 
```
POST: http://localhost:3000/api/contacts/addContact/:contactId with JSON as Body containing a User Object
```
<p align="center">
  <img src="https://github.com/jlessa/Contact-List-API/blob/master/public/images/add_contact_to_user.png" width="350"/>  
</p>

- Delete Contacts to User 
```
POST: http://localhost:3000/api/contacts/removeContact/:contactId with JSON as Body containing a User Object
```
<p align="center">
  <img src="https://github.com/jlessa/Contact-List-API/blob/master/public/images/remove_contact_from_user.png" width="350"/> 
</p>

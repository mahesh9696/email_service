# Email Engine Service
In this application, User can send email, view all emails, view single email and delete email.

# Technology Stack

- Node.js
- Express.js
- GraphQL
- Apollo server
- Sequelize ORM
- PostgreSQL

## Prerequisites
What things you need to install the software and how to install them

```
Node JS
PostgreSQL
```

## Getting Started

### Local Setup

```
After cloning this repository, run `npm install` in the project directory.

Install global package `npm install -g gulp-cli` in machine

Change Database settings in `src/config/config.json`

Create Database

Run `gulp build` command

Go to dist folder and Run `sequelize db:migrate`

```

## API ENDPOINTS

### SEND EMAIL 
```
POST

http://localhost:4000/graphql

mutation {
  sendEmail(message : "abc", subject :"test",recieverEmail:"m.mahesh.p@gmail.com"){
    message
    subject
    id
  }
} 
```

### VIEW ALL EMAILS
```
POST

http://localhost:4000/graphql

query {
  mails{
    id
    message
    subject
    recieverEmail
    sentStatus
    senderEmail
    readStatus
  }
}
```

### VIEW SINGLE EMAIL
```
POST

http://localhost:4000/graphql

query {
  mail(id:1){
        id
    message
    subject
    recieverEmail
    sentStatus
    senderEmail
    readStatus
  }
}

```


[Download Postman APIs Collection](https://raw.githubusercontent.com/mahesh9696/node-easy-notes-app/master/notes.postman_collection.json)

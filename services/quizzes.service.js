const mongodb = require("../mongodb");
const conn = mongodb.connection;
const ObjectId = mongodb.ObjectId;

const readAll = () => {
    return conn
        .db()
        .collection("quizzes")
        .find()
        .map(quiz => {
            quiz._id = quiz._id.toString();
            return quiz
        })
        .toArray()
}

const create = doc => {
    return conn.db()
        .collection("quizzes")
        .insertOne(doc)
        .then(result => result.insertedId.toString());
}

const readById = id => {
    return conn.db()
        .collection("quizzes")
        .find({ '_id': new ObjectId(id) })
        .limit(1)
        .map(result => {
            result._id = result._id.toString()
            return result
        })
        .next()
    // .then(res => {
    //     return res
    // })
    // .catch(err =>{
    //     return err
    // })
}

const _delete = id => {
    return conn.db()
        .collection("quizzes")
        .deleteOne({ _id: new ObjectId(id) })
        .then(result => Promise.resolve());
}

const updateById = (id, doc) => {
    return conn.db()
        .collection("quizzes")
        .replaceOne(
            { _id: new ObjectId(id) },
            { $set: doc })
        .then(result => {
            return result
        });
}

module.exports = {
    readAll
    , readById
    , create
    , _delete
    , updateById
}



const users = [
    {
        firstName: "Mike",
        lastName: "Wazowski",
        isBoardMember: true,
        isItAdmin: true,
        isProjectManager: true,
        year: 1
    },
    {
        firstName: "Sully",
        lastName: "Sullivan",
        isBoardMember: false,
        isItAdmin: false,
        isProjectManager: false,
        year: 4
    },
    {
        firstName: "Roz",
        lastName: "Peterson",
        isBoardMember: true,
        isItAdmin: false,
        isProjectManager: false,
        year: 1
    },
    {
        firstName: "Simba",
        lastName: "Lion",
        isBoardMember: false,
        isItAdmin: false,
        isProjectManager: false,
        year: 2
    },
    {
        firstName: "Nala",
        lastName: "Lion",
        isBoardMember: false,
        isItAdmin: false,
        isProjectManager: false,
        year: 3
    },
    {
        firstName: "Haleigh",
        lastName: "Reichert",
        isBoardMember: true,
        isItAdmin: false,
        isProjectManager: false,
        year: 4
    },
    {
        firstName: "Linwood",
        lastName: "Stiedemann",
        isBoardMember: false,
        isItAdmin: false,
        isProjectManager: true,
        year: 2
    },
    {
        firstName: "Jennie",
        lastName: "Hahn",
        isBoardMember: false,
        isItAdmin: false,
        isProjectManager: false,
        year: 4
    }
];

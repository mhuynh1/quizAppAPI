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
///author haddad med 

const userNameDb = 'HADDADMoe'
const passwordDb = '2hh1hPlSqCYo0Vlc'
const uri = 'mongodb+srv://'+userNameDb+':'+passwordDb+'@cluster0.p7c91cu.mongodb.net/?retryWrites=true&w=majority'
const uri2 = 'mongodb+srv://'+userNameDb+':'+passwordDb+'@cluster0.p7c91cu.mongodb.net/test'
const {MongoClient} = require('mongodb')


let dbConnection
module.exports = {
    connectToDB :(cb)=>{
        // MongoClient.connect('mongodb://127.0.0.1:27017/booksstore')
        MongoClient.connect(uri2)
            .then((client)=>{
                    dbConnection = client.db()
                    return cb() 
                            })
            .catch((err)=>{
                console.log(err) 
                return cb(err)
            })
    },
    getDB:()=>dbConnection
}
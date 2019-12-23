const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/*exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});*/

/*exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/messages').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
  });*/
  
exports.SignUpUser = functions.https.onRequest(async (req, res) => {
    const { email, password, name, id } = req.body
    //const key = await admin.auth().ref('/users').push().key;

    const user = {
        email: email,
        password: password,
        name: name,
        id: id,
        //image: '',
        points: 0
    }

    //await admin.database().ref('/users/'+name+'/info').set(user)
    let db = await admin.database().ref(`/USERS/${id}/`)

    db.once('value',(snapshot) => {
        if(snapshot.val() === null){
            db.child('INFO').set(user);
            res.json({status: true})
        }else {
            res.json({status: false})
        }
    })
    /*db.child('INFO').set(user);
    console.log(req.body)
    res.json({status: true})*/

    /*await admin.auth().createUser({
        email: email,
        password: password,
        displayName: name
    }).then((userRecord) => {
        return res.json(userRecord);
    })*/
})

exports.SignInUser = functions.https.onRequest(async (req, res) => {

    const { id, password } = req.body

    let db = await admin.database().ref(`/USERS/${id}/`)

    db.once('value',(snapshot) => {
        if(snapshot.val() !== null && snapshot.val().INFO.password === password){
            res.json(snapshot.val())
        }else {
            res.json({status: false})
        }
    })
    
})

exports.GetOffers = functions.https.onRequest(async (req, res) => {

    let db = await admin.database().ref('/OFFERS/')
})
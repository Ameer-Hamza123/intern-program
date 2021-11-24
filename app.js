const firebaseConfig = {
    apiKey: "AIzaSyCMvFrkq6T9MChYFYyIqbDkoPa15FpBanM",
    authDomain: "practiceintern-3761b.firebaseapp.com",
    projectId: "practiceintern-3761b",
    storageBucket: "practiceintern-3761b.appspot.com",
    messagingSenderId: "313459053304",
    appId: "1:313459053304:web:78e701d7ba21fd5ac1a10d",
    measurementId: "G-FV8Z0230XH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const firestore = firebase.firestore();

  function signin() {
    const email = document.getElementById("emailin").value;
    const password = document.getElementById("passwordin").value;
    auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

function logout() {
    auth.signOut();
}

function signup() {
    const email = document.getElementById("emailup").value;
    const password = document.getElementById("passwordup").value;
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

auth.onAuthStateChanged((user) => {
    if (user) {
        firestore.collection('users').doc(user.uid).set({
            email: user.email,
            lastLoggedInAt: new Date()
        })
            .then(() => {
                console.log("Document written");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    } else {
       
    }
});


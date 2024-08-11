// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_zYt5990zaXREN4ZoFsUUV9FHreBIJZg",
  authDomain: "fir-luckydraw-29b06.firebaseapp.com",
  databaseURL: "https://fir-luckydraw-29b06-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-luckydraw-29b06",
  storageBucket: "fir-luckydraw-29b06.appspot.com",
  messagingSenderId: "251179118550",
  appId: "1:251179118550:web:a5ba3609731cdeafaffe77",
  measurementId: "G-P8DKW9TRE1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

/*function save() {
  var PSNo = document.getElementById('PSNo').value
  var Name = document.getElementById('Name').value
  var LuckyNo = document.getElementById('LuckyNo').value


  database.ref('users/' + PSNo).set({
    PSNo : PSNo,
    Name : Name,
    LuckyNo : LuckyNo
  })

  alert('Saved')
}*/

  function get() {
  var PSNo = document.getElementById('PSNo').value

  var user_ref = database.ref('15Q33qjJUbF97BnL7BbQORvrjpsF3slCBom3jOjb7Wqc/Sheet1/' + PSNo)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    alert(data.LuckyNo)

  })

}

/*function update() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}*/
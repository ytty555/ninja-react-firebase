import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCZqvfwKVsOOfR29dSrJ1kVNvMJFxRUF9E',
  authDomain: 'net-ninja-marioplan-81594.firebaseapp.com',
  databaseURL: 'https://net-ninja-marioplan-81594.firebaseio.com',
  projectId: 'net-ninja-marioplan-81594',
  storageBucket: '',
  messagingSenderId: '839102574046',
  appId: '1:839102574046:web:7a22b33ce4f752476f014f'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

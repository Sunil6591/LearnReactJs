import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBCXfhgaqX6pqhFKVj7tmmCFKaor0Nnexk',
  authDomain: 'zaycare-demo1.firebaseapp.com',
  databaseURL: 'https://zaycare-demo1.firebaseio.com'
};

Firebase.initializeApp(config);

export const FIREBASE_DB = Firebase.database();

export const FIREBASE_AUTH = Firebase.auth();

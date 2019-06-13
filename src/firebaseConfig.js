import firebase from 'firebase'
import {firebaseConfigData} from './fbConsts';

// Initialize Firebase
firebase.initializeApp(firebaseConfigData);

export default firebase
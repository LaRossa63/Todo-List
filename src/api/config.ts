import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC5rbmuFXbT9goY4-cO3D6OUE7GKOQEdVU',
  authDomain: 'todo-4821d.firebaseapp.com',
  projectId: 'todo-4821d',
  storageBucket: 'todo-4821d.appspot.com',
  messagingSenderId: '895365614964',
  appId: '1:895365614964:web:500c534e62f0ebe63c7021',
};

const app = initializeApp(firebaseConfig);
export const bd = getDatabase(app);

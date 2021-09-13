export const FIREBASE_BACKEND = process.env.REACT_APP_FIREBASE_BACKEND as string;

if(typeof FIREBASE_BACKEND !== 'string' || !FIREBASE_BACKEND) {
  throw new Error('FIREBASE_BACKEND not set');
}

console.log('xyz');
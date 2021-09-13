export const FIRESTORE_BACKEND = process.env.REACT_APP_FIRESTORE_BACKEND as string;

if(typeof FIRESTORE_BACKEND !== 'string' || !FIRESTORE_BACKEND) {
  throw new Error('FIRESTORE_BACKEND not set');
}

console.log('xyz');
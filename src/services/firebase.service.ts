import admin from 'firebase-admin';
import 'dotenv/config';

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_JSON!);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const firebaseAdmin = admin;
export const firestore = admin.firestore();
export const auth = admin.auth();

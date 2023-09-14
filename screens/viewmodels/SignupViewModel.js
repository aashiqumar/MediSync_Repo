import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../FirebaseConfig'; // Assume you have auth and db initialized

class SignupViewModel {
  async signup(caretaker) {
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, caretaker.email, caretaker.password);
      const user = userCredential.user;

      // If successful, write data to Firestore
      const caretakersCollection = collection(db, 'caretakers');
      await addDoc(caretakersCollection, {
        name: caretaker.name,
        email: caretaker.email,
        dob: caretaker.dob,
        phoneNumber: caretaker.phoneNumber,
        userId: user.uid, // Assuming you want to link the user to the caretaker data
      });

      return { success: true, user };
    } catch (error) {
      return { success: false, error };
    }
  }

  // Add validation logic if needed
}

export default SignupViewModel;
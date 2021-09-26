import { collection, getDocs } from "@firebase/firestore";
import { fireDB } from "../firebase/config";

async function getUser(uid) {
  try {
    let authUser = null;
    const querySnapshot = await getDocs(collection(fireDB, "users"));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (docData.authUid == String(uid)) {
        authUser = docData;
      }
    });
    return authUser;
  } catch (error) {
    console.log(error);
  }
}

export default getUser;

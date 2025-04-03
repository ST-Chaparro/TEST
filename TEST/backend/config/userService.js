import { auth, db } from "./firebaseAdmin.js";

async function createUser(email, password, name, rol) {
  try {
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: name,
      emailVerified: true,
      disabled: false,
    });

    await db.collection("usuarios").doc(userRecord.uid).set({
      uid: userRecord.uid,
      name: name,
      email: userRecord.email, 
      rol: rol,
      createdAt: new Date(),
    });

    console.log(`Usuario creado: ${userRecord.email} con rol ${rol}`);
  } catch (error) {
    console.error(" Error creando usuario:", error);
  }
}

export { createUser };

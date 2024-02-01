// Importa as funções necessárias do Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAlstADfujfkd9VE8yVPxWJOQVs6QT5Jq8",
  authDomain: "animaa-c1fa4.firebaseapp.com",
  projectId: "animaa-c1fa4",
  storageBucket: "animaa-c1fa4.appspot.com",
  messagingSenderId: "645913476758",
  appId: "1:645913476758:web:240602f047655a58178cb7",
  measurementId: "G-R4G9LCXD8K"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obtém a instância do Firestore usando o objeto app
const db = getFirestore(app);

export { db };

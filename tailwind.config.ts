import type { Config } from 'tailwindcss'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-h2gIl8pL_Rb_ibHtsoKYFXIxai4P1yo",
  authDomain: "ecommerce2023-fd8b2.firebaseapp.com",
  projectId: "ecommerce2023-fd8b2",
  storageBucket: "ecommerce2023-fd8b2.appspot.com",
  messagingSenderId: "43812281023",
  appId: "1:43812281023:web:3def6e781e02cf1db1840a",
  measurementId: "G-470L8GGDCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//web config
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

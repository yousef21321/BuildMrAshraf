// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// تهيئة Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAJfFo8xx_ZHJqPWkKCz5qnc_pcLGYCYkA",
  authDomain: "leader-def57.firebaseapp.com",
  projectId: "leader-def57",
  storageBucket: "leader-def57.firebasestorage.app",
  messagingSenderId: "398551155721",
  appId: "1:398551155721:web:84cec415f4f95d9d81a4d8"
});

const messaging = firebase.messaging();

// معالجة الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  
  const notificationTitle = payload.notification?.title || 'إشعار جديد';
  const notificationOptions = {
    body: payload.notification?.body || 'لديك إشعار جديد',
    icon: '/logo192.png',
    badge: '/badge.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
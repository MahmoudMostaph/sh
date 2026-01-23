
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Critical rendering error:", error);
    container.innerHTML = `
      <div style="text-align:center; padding: 100px 20px; font-family: 'Tajawal', sans-serif;">
        <h2 style="color: #064e3b;">عذراً، حدث خطأ تقني غير متوقع</h2>
        <p>يرجى محاولة تحديث الصفحة.</p>
        <button onclick="window.location.reload()" style="background:#059669; color:white; border:none; padding:10px 20px; border-radius:5px; cursor:pointer; margin-top:20px;">تحديث</button>
      </div>
    `;
  }
}

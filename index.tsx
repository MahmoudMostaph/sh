
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("React rendering error:", error);
  rootElement.innerHTML = `<div style="text-align:center; padding: 50px; font-family: sans-serif;">
    <h2>عذراً، حدث خطأ أثناء تحميل الصفحة</h2>
    <p>يرجى تحديث الصفحة أو المحاولة لاحقاً</p>
  </div>`;
}

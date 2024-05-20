// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import InputForm from "./components/InputForm";
// import TelSelect from "./components/TelSelect";
// import Header from './components/Header';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Header />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<InputForm />} />
//             <Route path="/tel" element={<TelSelect />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }


import React, { useState } from 'react';
import InputForm from './components/InputForm';
import TelSelect from './components/TelSelect';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/common.css';

function App() {
  const [showTelSelect, setShowTelSelect] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {showTelSelect ? (
          <TelSelect onBack={() => setShowTelSelect(false)} />
        ) : (
          <InputForm onSubmit={() => setShowTelSelect(true)} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
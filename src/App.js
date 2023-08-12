import BookForm from './component/bookform'
import './App.css';
import Second from './component/second/second'
import {   Route, Routes } from 'react-router-dom';
import Form from './component/form/form'
function App() {
  return(
   <>
  
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/second-page" element={<Second />} />
      </Routes>
   
   
   </>
  );
}

export default App;

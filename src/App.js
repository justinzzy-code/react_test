import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/landing';
import CreateTask from './pages/create';

function App() {


  
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="create/" element={<CreateTask />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;

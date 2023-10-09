import React, {Suspense} from 'react';
import {useRoutes} from "react-router-dom";
import {MainLayoutPage} from "./pages/MainLayout/ui/MainLayoutPage";
import 'react-bootstrap';

const createRoutes = () => [
  {
    path: '/',
    element: <MainLayoutPage/>,
  },
  {
    path: '/*',
    element: <></>,
  },
];


function App() {
  const customRouter = useRoutes(createRoutes());

  return (
      <div className="App">
        <Suspense fallback={<></>}>{customRouter}</Suspense>
      </div>
  );
}

export default App;

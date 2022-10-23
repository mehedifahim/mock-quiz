import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';

import Statistics from './Components/Statistics/Statistics';
import Blogs from './Blogs/Blogs';
import Topics from './Topics/Topics';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'topics',
          element:<Topics></Topics>
        }
      ]
    }


  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;

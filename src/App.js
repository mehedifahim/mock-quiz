import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';

import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import Topics from './Components/Topics/Topics';
import Home from './Components/Home/Home';
import Questions from './Components/Questions/Questions';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          // loader: () => fetch('topics.json') ,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz') ,
          
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
        },
        {
          path: '/:id',
          element:<Questions></Questions>,
          
          loader: async({params})=>{
            return fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)

  
          }
          
          
        },
        {
          path:'*',
          element: <h1>404 Not Found</h1>
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

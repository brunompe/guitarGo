import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RatingContext from './context/ratingContext';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id/details",
    element: <ProductDetails />,
  },
]);

function App() {
  const [averageRating, setAverageRating] = useState(0);
  const [triggerUpdate, setTriggerUpdate] = useState(0);

  const handleRatingChange = () => setTriggerUpdate(prevTrigger => prevTrigger + 1);

  return (
    <RatingContext.Provider value={{ averageRating, triggerUpdate, handleRatingChange }}>
      <div className='text-white tw-font-nunito-light tw-bg-gray tw-h-full tw-w-full'>
        <Header />
        <div className='tw-flex tw-h-full'>
          <Sidebar />
          <RouterProvider router={router} />
        </div>
      </div>
    </RatingContext.Provider>
  )
}

export default App

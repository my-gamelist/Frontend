import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import TopGames from './pages/TopGames';
import Sidebar from './component/Sidebar';
import Login from './pages/Login';
import Register from './pages/Register'
export default function App() {
  return (
    <div className="flex w-full h-full">
      <BrowserRouter>
        {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:gameId" element={<Game />} />
            <Route path="/top" element={<TopGames />} />
            <Route path="/login" element={<Login />} />
            <Route path= "/register" element={<Register/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

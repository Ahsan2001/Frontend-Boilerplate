import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home,About } from '../pages';
const WebRoutes: React.FC = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<h1>contact </h1>} />
        </Routes>
      </BrowserRouter>
    )
}

export default WebRoutes;
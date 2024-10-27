import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogStaticPage_84 from "./pages/BlogStaticPage_84";
import BlogNodePage_84 from "./pages/BlogNodePage_84";

const App_84 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/static_84' element={<BlogStaticPage_84/>} />
                <Route path='/node_84' element={<BlogNodePage_84/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App_84;
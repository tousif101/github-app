import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Home from './components/pages/Home';
import UserPage from './components/pages/UserPage';
import { GithubProvider } from './context/GithubContext';

function App() {
  return (
    <GithubProvider>
    <BrowserRouter>
      <div className='flex flex-col justify-between h-screen'>
      <NavBar />
      <main className='container mx-auto px-3 pb-12'>Content</main>
        <main className='container mx-auto px-3 pb-12'>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:loginId' element={<UserPage />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path = '/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
      </BrowserRouter>
     </GithubProvider>
  );
}

export default App;

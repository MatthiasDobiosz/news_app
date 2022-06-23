import './App.css';
import { Navbar, News } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/top-news' element={<News newsCategory='general' headerTitle="Top News" headerText="All the hottest news around the world!" headerImg="\general.jpg" headerDescription="general-image"/>}/>
          <Route path='/business' element={<News newsCategory='business' headerTitle="Business News" headerText="All the latest stuff of the business-world!" headerImg="\business.jpg" headerDescription="business-image"/>}/>
          <Route path='/sports' element={<News newsCategory='sports' headerTitle="Sport News" headerText="All the latest craze in the fitness world!" headerImg="\sports.jpg" headerDescription="sport-image"/>}/>
          <Route path='/health' element={<News newsCategory='health' headerTitle="Health News" headerText="All the latest news in the world of Medicine!" headerImg="\health.jpg" headerDescription="health-image"/>}/>
          <Route path='/science' element={<News newsCategory='science' headerTitle="Science News" headerText="All the latest news about science!" headerImg="\science.jpg" headerDescription="science-image"/>}/>
          <Route path='/technology' element={<News newsCategory='technology' headerTitle="Technology News" headerText="All the latest news in technology!" headerImg="\technology.jpg" headerDescription="techonology-image"/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

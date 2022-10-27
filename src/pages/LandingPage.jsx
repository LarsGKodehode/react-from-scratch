// Libraries
import { Routes, Route } from 'react-router-dom';

// Styled components
import { StyledMain } from "../components/Styled";

// Components
import Navbar from "../components/Navbar";

// Pages
import Home from './LandingPageFiles/Home';
import About from './LandingPageFiles/About';

const LandingPage = () => {
  return(
    <StyledMain>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
        
      {/* <footer></footer> */}
    </StyledMain>
  )
};


export default LandingPage;
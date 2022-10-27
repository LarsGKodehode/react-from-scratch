// Libraries
import { Link } from 'react-router-dom';

// Styled Components
import { HorizontalList, UnmarkedListElement } from './StyledLists';

const Navbar = () => {
  return(
    <header>
      <nav>
        <HorizontalList>
          <UnmarkedListElement><Link to={"/"} title="Main page">Home</Link></UnmarkedListElement>
          <UnmarkedListElement><Link to={"/About"} title="About us">About</Link></UnmarkedListElement>
        </HorizontalList>
      </nav>
    </header>
  );
};

export default Navbar;
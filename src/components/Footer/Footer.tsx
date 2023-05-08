import useMatchMedia from '../../hooks/useMatchMedia';
import Contacts from '../Contacts/Contacts';
import NavLinks from '../Home/NavMenu/NavMenu';
import SocialIcons from '../Home/SocialIcons';
import ThemeSwitcher from '../ThemeSwitcher';
import {StyledFooter} from './StyledFooter';

const Footer = () => {
  const {isMobile} = useMatchMedia();
  return (
    <StyledFooter>
      <Contacts />
      <SocialIcons />
      {isMobile && <ThemeSwitcher />}
    </StyledFooter>
  );
};

export default Footer;

import Contacts from '../Contacts/Contacts';
import NavLinks from '../Home/NavMenu/NavMenu';
import SocialIcons from '../Home/SocialIcons';
import ThemeSwitcher from '../ThemeSwitcher';
import {StyledFooter} from './StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <Contacts />
      <SocialIcons />
      <ThemeSwitcher />
    </StyledFooter>
  );
};

export default Footer;

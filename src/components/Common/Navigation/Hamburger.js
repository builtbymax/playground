import Styles from './Hamburger.module.scss';
import clsx from 'clsx';

const Hamburger = ({ setIsOpen, isOpen, hideOnDesktop = false }) => {
  const hideClass = hideOnDesktop ? Styles['hide-on-desktop'] : '';
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={clsx(Styles.hamburger, hideClass, isOpen && Styles['is-active'])} onClick={toggleMenu} aria-haspopup="true" aria-expanded={isOpen ? true : false}>
      <span></span>
    </button>
  );
};
Hamburger.displayName = 'Hamburger';

export default Hamburger;

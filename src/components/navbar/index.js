/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { UserDataContext } from 'context';
import { firstLetterUpper } from 'constants/commonFunctions';

const Navbar = () => {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserDataContext);

  const handleSignout = () => {
    history.replace('/login');
    setUserData(null);
    localStorage.removeItem('xzero_user');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={require('../../assets/images/logo.png')} className="nav-logo" alt="xzero" loading="lazy" />
          </a>
          <div className="collapse d-flex" id="navbarNavDropdown">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              {/* Mobile Responsive List Icon */}
            </button>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <svg viewBox="0 0 512 512" className="nav-icon"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink">
                  {firstLetterUpper(userData?.fullname)}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#" data-toggle="modal" onClick={() => handleSignout()}>Signout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Login from "pages/login";
import Home from "pages/home";
import DeclareWinner from "pages/declareWinner";
import { getUserData } from "constants/commonFunctions";
import { UserDataContext } from "context";

const Navigation = () => {
  const { setUserData } = useContext(UserDataContext);
  let history = useHistory();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    let user = getUserData();
    if (user && user?.jwt !== '') {
      setUserData(user);
    }
    else {
      history.push('/login');
    }
  }

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/declare-winner/:id">
        <DeclareWinner />
      </Route>
    </Switch>
  );
}

export default Navigation;
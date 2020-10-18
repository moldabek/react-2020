import React, { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Registration from "./components/Registration";
import Welcome from "./components/Welcome";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Ilias",
    email: "asdasd@com",
    password: "asdasd",
  }
];

function App() {
  const [showedElement, setShowedElement] = useState(<></>);

  return (
      <div className="card">
        <div className="buttons">
          <button onClick={() => showComponent(AuthorizationPages.Auth)}>Login</button>
          <button onClick={() => showComponent(AuthorizationPages.Registration)}>Sign Up</button>
        </div>

        {showedElement}
      </div>
  );

  function showComponent(page?: AuthorizationPages, user?: User) {
    switch (page) {
      case AuthorizationPages.Auth:
        setShowedElement(
            (prevElement) =>
                (prevElement = <Auth login={authenticateUser} cancel={showComponent} />)
        );
        break;

      case AuthorizationPages.Registration:
        setShowedElement(
            (prevElement) =>
                (prevElement = (
                    <Registration registrate={createNewUser} cancel={showComponent} />
                ))
        );
        break;

      case AuthorizationPages.Welcome:
        if (user) {
          setShowedElement((prevElement) => (prevElement = <Welcome user={user} />));
        }
        break;

      default:
        setShowedElement((prevElement) => (prevElement = <></>));
        break;
    }
  }

  function createNewUser(user: User) {
    // let regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    if (users && user) {
      const checker = users.find((u) => u.email === user.email);
      if (checker) {
        return;
      }
      if(user.name && user.email.search('@') && user.password.length >= 8){
        user.id = users.length + 1;
        users.push(user);
        showComponent(AuthorizationPages.Auth);
      }
      else{
        return <div>email is wrong</div>;
      }

    }
  }

  function authenticateUser(user: User) {
    if (users && user) {
      console.log(user);
      if (user.email && user.password){
        const checker = users.find(
            (u) => u.email === user.email && u.password === user.password
        );
        if (checker) {
          showComponent(AuthorizationPages.Welcome,checker);
        }
      }
      else{
        window.alert('you want to fill all forms')
      }
    }
  }
}

export enum AuthorizationPages {
  Main,
  Auth,
  Registration,
  Welcome
}

export default App;

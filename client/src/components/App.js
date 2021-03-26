import React, {useState, useEffect} from 'react'
import Navbar from './Navbar/Navbar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home.js';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import {getUsers} from '../actions/userActions.js';

const App = () => {

    const [user, setUser] = useState(null);
    const [userNames, setUserNames] = useState([]);

    const updateUser = (usr) => {
        usr.then(res => setUser(res)).catch(error => console.log(error));
    }

    const logoutUser = () => {
        setUser(null);
    }

    useEffect(() => {
        if(user) {
            const userPromise = getUsers();
            userPromise.then((userNames) => setUserNames(userNames)).catch(err => console.log(err));

        }
    }, [user]);

    return (
        <Router>
            <Navbar user={user} logoutUser={logoutUser} />
                <Switch>
                    <Route path="/" exact>
                        <Home user={user} users={userNames} />
                    </Route>
                    <Route path="/login" exact>
                        <Login user={user} updateUser={updateUser} />
                    </Route>
                    <Route path="/register" exact>
                        <Register updateUser={updateUser} />
                    </Route>
                </Switch>
        </Router>
    )
}

export default App

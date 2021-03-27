import React, {useState, useEffect} from 'react'
import Navbar from './Navbar/Navbar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home.js';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import {getUsers} from '../actions/userActions.js';

const App = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))?.result);
    const [userNames, setUserNames] = useState([]);

    const updateUser = (usr) => {
        setUser(usr);
    }

    useEffect(() => {
        if(user) {
            const userPromise = getUsers();
            userPromise.then((userNames) => {
                setUserNames(userNames);
            }).catch(err => alert(err));

        }
    }, [user]);

    return (
        <Router>
            <Navbar user={user} setUser={setUser} />
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

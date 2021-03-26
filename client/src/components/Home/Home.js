import React from 'react';
import useStyles from './styles';

const Home = ({user, users}) => {
    const classes = useStyles();

    const renderedUsers = users.map((user, index) => {
        return (
            <div key={index} className={classes.item}>{index+1}. {user}</div>
        );
    })

    return (
        <React.Fragment>
            <div className={classes.intro}>
                <h1 className={classes.title}>Authorizer</h1>
                <p className={classes.para}>A demo app where user can login or register. Registered users can see the
                names of the members registered in the Authorizer.</p>
            </div>
            {
                (user && users.length>0) ? (
                    <div className={classes.users}>
                        <h1 className={classes.userList}>List of Users</h1>
                        {renderedUsers}
                    </div>
                ) : null
            }
        </React.Fragment>
    )
}

export default Home

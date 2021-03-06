import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    intro: {
      width: '100%',
      margin: '0 auto',
      height: 400,
      borderRadius: '0 0 20px 20px',
      boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)',
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right top, #edf9ff, #73d0ff)',
    },
    title: {    
        fontSize: '5rem'
    },

    para: {
        margin: '40px 10%',
        fontSize: '1.7rem',
        alignContent: 'center'
    },
    users: {
        width: '30%',
        margin: '20px auto',
        
    },
    userList: {
        margin: '0 auto',
        textAlign: 'center',
    },
    item: {
        border: '2px solid black',
        margin: '10px',
        padding: '10px',
        borderRadius: '21px'
    }
  }));
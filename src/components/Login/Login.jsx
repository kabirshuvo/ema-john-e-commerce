import React from 'react';

const Login = () => {

const handleSubmit = ()=> {

}

const styles = {
    container: {
      backgroundColor: "rebeccapurple",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    form: {
      width: "100%",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      margin: "10px 0"
    },
    label: {
      fontWeight: "bold",
      margin: "10px 0"
    },
    button: {
      backgroundColor: "#1E90FF",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      marginTop: "20px"
    }
  };

    return (
        <div style={styles.container} className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div style={styles.form}>
        <label style={styles.label} >First Name</label>
        <input style={styles.input}
          type="text"
          id="firstName"
          
        //   onChange={(event) => setFirstName(event.target.value)}
          required
        />

        <label style={styles.label} >Last Name</label>
        <input style={styles.input}
          type="text"
          id="lastName"
          
          
          required
        />

        <label style={styles.label}>Email</label>
        <input style={styles.input}
          type="email"
          id="email"
        //   value={email}
        //   onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label style={styles.label} htmlFor="password">Password</label>
        <input style={styles.input} 
          type="password"
          id="password"
        //   value={password}
        //   onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button style={styles.button}>Signup with google</button>
       
        </div>
        
      </form>
      
    </div>
    );
};

export default Login;
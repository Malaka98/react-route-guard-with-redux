import React, { useEffect, useCallback} from "react";
import { connect } from "react-redux";

import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link  } from "react-router-dom";

import userLogin from "../../Redux/Action/Auth/loginAction"

import "./style.css";

function LogingPage({ authData, loginUser, nextPage }) {

  // const history = useHistory();
  // const location = useLocation();
  // function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }

  // let query = useQuery();

  const displayerror = useCallback(() => {

    // if(authData.unauthorized_user) {
    //   console.log("***********************");
    //   // history.push("/dashboard?uname=root");
    //   nextPage();
      
    // }
    if (!authData.unauthorized_user && authData.unauthorized_user != null) {
      toast.error(`${authData.error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
    // if (query.get("logout") === "yes") {
    //   toast.info("Logout successfully!", {
    //     position: "top-right",
    //     autoClose: 4000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }
  }, [authData.unauthorized_user, authData.error]);

  useEffect(() => {
    displayerror()
  }, [displayerror, authData.tryCount]);

  function login(e) {
    e.preventDefault();

    let data = {
      email: e.target.uname.value,
      pass: e.target.pass.value,
      // count: authData.tryCount
    }

    loginUser(data)

  }

  return (
    <div className="loginpage">
      <div className="loginform">
        <Form onSubmit={login}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control name="uname" type="text" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="pass" type="password" placeholder="Password" />
          </Form.Group>
          <div className="formbtn">
          <Button variant="primary" type="submit" className="flex-item1">
            LogIn
          </Button>
          <Link to="/regpage" className="flex-item2">SingUp</Link>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authData: state.loginUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (fData) => dispatch(userLogin(fData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogingPage)
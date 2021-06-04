import React, { Component } from "react";

// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

import { fetchUsers } from "./Redux/Action/Auth/authAction";

import "./App.css";

export default function authGuard(GuardComponents) {
  class authGuard extends Component {
    _checkAndRedirect() {
      this.props.auth();
    }

    componentDidMount() {
      this._checkAndRedirect();
    }

    render() {

      if(this.props.authData.auth) return <GuardComponents />;

      return this.props.authData.loading ? (
        <div className="loading">
          <PulseLoader color={"#4A90E2"} size={50} margin={25} />
          <strong className="loadingtxt">Loading...</strong>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            search: "?auth=error",
          }}
        />
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      authData: state.authDetail,
    };
  };

  // function mapDispatchToProps(dispatch) {
  //   return bindActionCreators({auth: fetchUsers},dispatch)
  // };

  const mapDispatchToProps = (dispatch) => {
    return {
      auth: () => dispatch(fetchUsers()),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(authGuard);
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import styles from "./Login.module.css";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.section}>
        <h1 className={styles.title}>Login page</h1>
        {this.props.isError && <ErrorBoundary />}
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.formLabel}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.formInput}
            />
          </label>

          <label className={styles.formLabel}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.formInput}
            />
          </label>

          <button type="submit" className={styles.formButton}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isError: authSelectors.getError(state),
});

export default connect(mapStateToProps, { onLogin: authOperations.logIn })(
  LoginView
);

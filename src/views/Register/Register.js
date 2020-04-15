import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import styles from "./Register.module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.section}>
        <h1 className={styles.title}>Register page</h1>
        {this.props.isError && <ErrorBoundary />}
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.formLabel}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.formInput}
            />
          </label>

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
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isError: authSelectors.getError(state),
});

export default connect(mapStateToProps, {
  onRegister: authOperations.register,
})(RegisterView);

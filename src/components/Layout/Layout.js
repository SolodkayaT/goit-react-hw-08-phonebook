import React, { Component } from "react";
import ThemeContext from "../context/themeContext";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import withTheme from "../hok/withTheme";
import styles from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {theme => (
            <div
              className={styles.body}
              style={{ color: theme.fontColor, background: theme.bodyBg }}
            >
              {this.props.toggle && (
                <SwitchTheme onToggleTheme={e => this.props.toggle(e)} />
              )}
              {this.props.children}
            </div>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default withTheme(Layout);

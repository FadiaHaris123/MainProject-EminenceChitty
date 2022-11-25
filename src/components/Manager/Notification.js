import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";
// import "./styles.css";
const Notify = () => {
  const [state, setState] = React.useState({
    success: false,
    error: false,
    warning: false,
    info: false,
    none: false,
  });
  const onToggle = (flag) =>
    setState({
      ...state,
      [flag]: !state[flag],
    });
  const { success, error, warning, info, none } = state;
  return (
    <React.Fragment>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={() => onToggle("success")}
      >
        {(success ? "hide " : "show ") + "Success"}
      </button>
      &nbsp;
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={() => onToggle("error")}
      >
        {(error ? "hide " : "show ") + "Error"}
      </button>
      &nbsp;
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={() => onToggle("warning")}
      >
        {(warning ? "hide " : "show ") + "Warning"}
      </button>
      &nbsp;
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={() => onToggle("info")}
      >
        {(info ? "hide " : "show ") + "Info"}
      </button>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={() => onToggle("none")}
      >
        {(none ? "hide " : "show ") + "Unstyled"}
      </button>
      <NotificationGroup
        style={{
          right: 0,
          bottom: 0,
          alignItems: "flex-start",
          flexWrap: "wrap-reverse",
        }}
      >
        <Fade>
          {success && (
            <Notification
              type={{
                style: "success",
                icon: true,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  success: false,
                })
              }
            >
              <span>Your data has been saved.</span>
            </Notification>
          )}
        </Fade>
        <Fade>
          {error && (
            <Notification
              type={{
                style: "error",
                icon: true,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  error: false,
                })
              }
            >
              <span>Oops! Something went wrong ...</span>
            </Notification>
          )}
        </Fade>
        <Fade>
          {warning && (
            <Notification
              type={{
                style: "warning",
                icon: true,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  warning: false,
                })
              }
            >
              <span>Your password will expire in 2 days!</span>
            </Notification>
          )}
        </Fade>
        <Fade>
          {info && (
            <Notification
              type={{
                style: "info",
                icon: true,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  info: false,
                })
              }
            >
              <span>You have 1 new message!</span>
            </Notification>
          )}
        </Fade>
        <Fade>
          {none && (
            <Notification
              type={{
                style: "none",
                icon: false,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  none: false,
                })
              }
              style={{
                overflow: "visible",
              }}
            >
              <span>Hanna Moos likes your status.</span>
            </Notification>
          )}
        </Fade>
      </NotificationGroup>
    </React.Fragment>
  );
};
ReactDOM.render(<Notify />, document.querySelector("my-app"));
export default Notify;
import { Fragment } from "react";
import RcDrawer from "rc-drawer";
import Logo from "./Logo";

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className || ""}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={"0.4s"}
        {...props}
      >
        {closeButton && (
          <div onClick={toggleHandler} className={closeBtnStyle}>
            <Logo />
            {closeButton}
          </div>
        )}

        <div className={drawerStyle}>{children}</div>
      </RcDrawer>
      <div
        className="drawer__handler"
        style={{ display: "inline-block" }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </Fragment>
  );
}

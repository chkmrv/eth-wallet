import React from "react";
import classnames from "classnames";
import "./Spinner.scss";

interface ISpinnerProps {
  visible: boolean;
  size: string;
}

class Spinner extends React.Component<ISpinnerProps> {
  resolveStyle = () => ({
    width: this.props.size,
    height: this.props.size,
  });

  render() {
    return (
      this.props.visible && (
        <div className={classnames("spinner")} style={this.resolveStyle()}>
          <div
            className="spinner-inner"
            style={{ width: this.props.size, height: this.props.size }}
          />
        </div>
      )
    );
  }
}

export default Spinner;

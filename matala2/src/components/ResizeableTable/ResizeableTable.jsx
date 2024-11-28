import React, { Component } from "react";
import "./style.css";

class ResizableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableWidth: "100%",
    };
  }

  handleTableClick = () => {
    this.setState({ tableWidth: "50%" });
  };

  handleTableDoubleClick = () => {
    this.setState({ tableWidth: "100%" });
  };

  render() {
    return (
      <div className="container table-section">
        <h2 className="title">Resizable Table</h2>
        <div className="table-wrapper">
          <table
            className="resizable-table"
            style={{ width: this.state.tableWidth }}
            onClick={this.handleTableClick}
            onDoubleClick={this.handleTableDoubleClick}
          >
            <tbody>
              {[1, 2].map((row) => (
                <tr key={row}>
                  {[1, 2, 3].map((col) => (
                    <td key={col} className="table-cell">
                      Row {row}, Col {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ResizableTable;

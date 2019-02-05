import React from "react";
import { switchTheme } from "../../store/actions/settings/settings";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";

const formatData = data => {
  if (typeof data === "number") {
    return data > 0 ? "+" + data.toFixed(2) : data.toFixed(2);
  }
  return data;
};

//If you want to make change in data with respect to column do here
const getClass = (colIndex, data) => {
  if (colIndex === 0) {
    return "company-name";
  }
  if (colIndex === 3) {
    return data < 0 ? "price__change--red" : "price__change--green";
  }
  if (colIndex === 1) {
    return "colourful-background";
  }
  if (colIndex === 2) {
    return "colourful-background colourful-background--no-border";
  }
  return "";
};

const getCell = (data, rowIndex, colIndex, heading) =>
  heading ? (
    <th key={`heading-${colIndex}`}>{data}</th>
  ) : (
    <td
      key={`row-${rowIndex}-${colIndex}`}
      className={getClass(colIndex, data)}
    >
      {colIndex === 3 ? formatData(data) : data}
    </td>
  );

const getRow = (row, heading, rowIndex) => (
  <tr key={heading ? "heading" : `row-${rowIndex}`}>
    {row.map((data, colIndex) => getCell(data, rowIndex, colIndex, heading))}
  </tr>
);

const getDataRows = rows =>
  rows.map((row, rowIndex) => getRow(row, false, rowIndex));

const StockTable = ({ columns, data }) => (
  <div className="StockTable">
    <div className="StockTable__header">
      {" "}
      <i className="fas fa-table" />
      <span>Table</span>
    </div>
    <div className="StockTable__container">
      <table>
        <thead>{columns && getRow(columns, true)}</thead>
        <tbody>{data && getDataRows(data)}</tbody>
      </table>
    </div>
  </div>
);

const mapStateToProps = state => ({
  theme: state.settings.theme,
});

export default connect(
  mapStateToProps,
  { switchTheme },
)(StockTable);

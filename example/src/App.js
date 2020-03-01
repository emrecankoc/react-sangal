import React, { Component } from "react";

import { SangalPager, SangalTable } from "react-sangal";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    currentPage: 5,
    lastPage: 10
  };
  onPageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const pager = {
      currentPage: this.state.currentPage,
      lastPage: this.state.lastPage,
      onPageChangeEvent: this.onPageChange
    };
    const header = {
      clmnSelection: { text: "Selection", type: "checkbox", editable: true },
      clmnName: { text: "Name", type: "text", editable: false },
      clmnSurname: { text: "Surname", type: "text", editable: true }
    };
    const rows = [
      { clmnSelection: "1", clmnName: "John", clmnSurname: "Doe" },
      { clmnSelection: "0", clmnName: "Adam", clmnSurname: "Jackson" },
      { clmnSelection: "0", clmnName: "Garry", clmnSurname: "Smith" }
    ];
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <SangalPager {...pager} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SangalTable pager={pager} header={header} rows={rows} />
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import MaterialTable from "material-table";
import data from "../constants/data";

export default class Users extends React.Component {
  state = {
    contentArray: data
  };

  updateState = obj => {
    this.setState(obj);
  };

  render() {
    const { contentArray } = this.state;

    return (
      <div>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            {
              title: "Age",
              field: "age",
              render: n => n.age + " Yrs"
            },
            { title: "Profile", field: "profile" },
            {
              title: "Location",
              field: "location"
            },
            {
              title: "Total Expirence",
              field: "exp",
              render: n => n.exp + " Yrs"
            }
          ]}
          data={contentArray}
          title="Users"
          options={{
            grouping: true,
            sorting: true
          }}
        />
      </div>
    );
  }
}

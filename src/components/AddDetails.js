import React from "react";

export const AddDetails = () => {
  return (
    <div className="col-sm-6">
      <form>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name........."
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name........."
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email........."
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone Number..."
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

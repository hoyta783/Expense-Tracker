import React from 'react';

export default function App() {
  return (
    <>
      <div className="container mt-4">
        <h4 className="text-center mb-4">Expense Tracker </h4>
        <div className="row">
          {/* 
           <h4 className="text-center">My Bal $200.00</h4>
          <div class="col-4">
            <h4 className="text-center">History </h4>
          </div>
          <div class="col-4">
            <h4 className="text-center">Add </h4>
          </div> */}

          <div class="col-12 col-md-6 col-lg-2 pb-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Income</h5>
                <h6 className="card-subtitle mb-2 text-muted">$100</h6>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-2 pb-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Expense</h5>
                <h6 className="card-subtitle mb-2 text-muted">$100</h6>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-12 col-lg-4 pb-2">
            <div className="card bd-callout-danger">
              <div className="card-body">
                <h6 className="card-subtitle ">$100</h6>
              </div>
            </div>

            <div className="card bd-callout-success">
              <div className="card-body ">
                <h6 className="card-subtitle ">$100</h6>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4 pb-2">
            <form>
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Title" />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

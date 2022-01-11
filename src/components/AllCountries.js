import React from "react";
import Country from "./Country";

function AllCountries(props) {
  const asiaData = props.data;

  return (
    <>
      <div className="contaner-fluid mb-5">
          <div className="row">
              <div className="col-11 mx-auto">
                  <div className="row gy-5">
                      {
                          asiaData.map((val,ind) => {
                              return <Country key={ind} singleCountryData={val} />
                          })
                      }
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default AllCountries;

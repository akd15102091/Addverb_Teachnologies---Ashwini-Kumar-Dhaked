import React from "react"

function Country(props) {
  var countryData = props.singleCountryData ;

  let languages =" ";
  if(Object.keys(countryData.languages).length){
      for(let key in countryData.languages){
          languages +=countryData.languages[key]+",  ";
      }
      languages = languages.substring(0, languages.length-3);
  }

  let borders =" ";
  if( countryData.borders && Object.keys(countryData.borders).length){
      for(let key in countryData.borders){
          borders +=countryData.borders[key]+",  ";
      }
      borders = borders.substring(0, borders.length-3);
  }

  return (
    <React.Fragment>

      <div className="col-md-3 col-12 mx-auto ">
          <div className="card">
              <img src={countryData.flags.png} className="card-img-top countryflag" alt={countryData.flags.png} />
              <div className="card-body">
                  <div className="card-title font-weight-bold">{countryData.name.common}</div>
                  {
                      countryData.capital && (
                        <div className="info">
                            <div className="title">Capital :</div> <div className="description">{countryData.capital}</div>
                        </div>  
                      )
                  }
                  <div className="info">
                      <div className="title">Region :</div> <div className="description">{countryData.region}</div>
                  </div>
                  <div className="info">
                      <div className="title">Subregion : </div><div className="description">{countryData.subregion}</div>
                  </div>
                  <div className="info">
                      <div className="title">Population :</div> <div className="description">{countryData.population}</div>
                  </div>
                  {
                      countryData.borders && (
                        <div className="info">
                            <div className="title">Borders :</div> <div className="description">{borders}</div>
                        </div> 
                      )
                  }
                  <div className="info">
                      <div className="title">Languages : </div> <div className="description">{languages}</div>
                  </div>
                  
                  
              </div>
          </div>
      </div>
 

    </React.Fragment>
  );
}

export default Country;
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CountryDetails extends Component {


    findDetails = () => {
        console.log('country details cca3:',this.props.match.params.cca3, this.props.countries)
        let theCountry = this.props.countries.find(eachCountry => {
            return eachCountry.cca3 === this.props.match.params.cca3
        })
        console.log(theCountry)
        return theCountry;
        
    }

    renderBorders = () => {
      ///////create a method that renders a list item for each country///////
      let theCountry = this.props.countries.find(eachCountry => { 
        return eachCountry.cca3 === this.props.match.params.cca3
    }) ///////this part above lets us find each individual country //////////
    console.log(theCountry)
      console.log(theCountry.borders)
      let countryBorderWithBullets = theCountry.borders.map(eachBorder => <li> <Link key={eachBorder} to={`/countries-details/${eachBorder}`}>{eachBorder}</Link></li>) ///////this part makes a bullet for each border ///////////
      return countryBorderWithBullets
      ////// 
    }



    render() {
      let theCountry = this.findDetails()
      console.log(this.props)
      console.log(typeof this.props.match)
        return (
            <div className="col-7">

            {/* {this.findDetails()} */}
            <h1>{theCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{theCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{theCountry.area} km
           <sup> 2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {this.renderBorders()}

                      {/* {/* <li>{theCountry.borders && theCountry.borders</li> */}
                      {/* <li>{theCountry.borders}</li>
                      <li>{theCountry.borders}</li>
                      <li></li>
                      <li></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li> */}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default CountryDetails;
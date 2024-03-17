import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapital: countryAndCapitalsList[0].id,
  }

  onChangeCapitals = event => {
    this.setState({activeCapital: event.target.value})
  }

  getCountry = activeCapital => {
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapital,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapital} = this.state
    const country = this.getCountry(activeCapital)
    return (
      <div className="container">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div className="select-card">
            <select value={activeCapital} onChange={this.onChangeCapitals}>
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals

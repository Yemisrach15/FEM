import React from 'react';
import axios from 'axios';
import Map from './Map';
import Section from './Section';
import SectionType from './SectionType';

class Main extends React.Component {

  state = {
    clientIpaddr: "",
    inputIpaddr: "",
    ipaddr: "",
    location: "",
    timezone: "",
    isp: "",
    lat: 0,
    lng: 0,
    loading: true
  }

  inputRef = React.createRef();
  smallRef = React.createRef();

  getClientIP = async () => {
    await axios.get(`/apiIpify/?format=json`)
      .then(res => {
        this.setState({ clientIpaddr: res.data.ip })
      });
  }

  async componentDidMount() {
    await this.getClientIP();
    await axios.get(`/apiGeoIpify/country,city?ipAddress=${this.state.clientIpaddr}`)
        .then(res => {
            const locationString = `${res.data.location.city}, ${res.data.location.country} ${res.data.location.postalCode}`;

            this.setState({
                ipaddr: res.data.ip,
                location: locationString,
                timezone: res.data.location.timezone,
                isp: res.data.isp,
                lat: res.data.location.lat,
                lng: res.data.location.lng,
                loading: false
            });
        });
  }

  handleInputChange = (e) => {
    this.setState({ inputIpaddr: e.target.value });
  }

  handleSubmit = () => {
    this.setState({ loading: true });
	this.inputRef.current.classList.remove('input--error');
	this.smallRef.current.classList.add('hidden');
	
    axios.get(`/apiGeoIpify/country,city?ipAddress=${this.state.inputIpaddr}`)
        .then(res => {
            const locationString = `${res.data.location.city}, ${res.data.location.country} ${res.data.location.postalCode}`;
            this.setState({
                ipaddr: res.data.ip,
                location: locationString,
                timezone: res.data.location.timezone,
                isp: res.data.isp,
                lat: res.data.location.lat,
                lng: res.data.location.lng,
                loading: false
            });
        })
        .catch(err => {
            this.setState({
                ipaddr: "-",
                location: "-",
                timezone: "-",
                isp: "-",
                loading: false
            });

            if (err.response.data.code === 422) {
                this.inputRef.current.classList.add('input--error');
                this.smallRef.current.classList.remove('hidden');
            }
        });
  }

  preventSubmitOnEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  render() {
    return (
      <>
        <div className='addr'>
          <div>
            <h1>IP Address Tracker</h1>
            <form>
              <div>
                <input onChange={this.handleInputChange} name='addr' type='text' placeholder='Search for any IP address or domain' defaultValue={this.state.clientIpaddr} onKeyPress={this.preventSubmitOnEnter} ref={this.inputRef} />
                <button aria-label="Get IP Information" onClick={this.handleSubmit} type='button'></button>
              </div>
              <small className='hidden' ref={this.smallRef}>Please enter a valid IPv4 or IPv6 address</small>
            </form>
            <div className='addr__info'>
              <Section loading={this.state.loading} heading={SectionType.IPADDR} para={this.state.ipaddr} />
              <Section loading={this.state.loading} heading={SectionType.LOCATION} para={this.state.location} />
              <Section loading={this.state.loading} heading={SectionType.TIMEZONE} para={this.state.timezone} />
              <Section loading={this.state.loading} heading={SectionType.ISP} para={this.state.isp} />
            </div>
          </div>
        </div>
        <div className='map__container'>
          <Map loading={this.state.loading} lat={this.state.lat} lng={this.state.lng} />
        </div>
      </>
    );
  }
}

export default Main;
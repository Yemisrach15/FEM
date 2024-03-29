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
    loading: true,
	errMessage: "",
  }

  inputRef = React.createRef();
  smallRef = React.createRef();

  getClientIP = async () => {
	await axios.get('/api/ipify')
		.then(res => {
		this.setState({ clientIpaddr: res.data.ip })
		})
		.catch(err => {
			this.setState({ 
				ipaddr: "-",
				location: "-",
				timezone: "-",
				isp: "-",
				loading: false,
				errMessage: err.response.data.message 
			});
			this.inputRef.current.classList.add('input--error');
			this.smallRef.current.classList.remove('hidden');
		})
  }

  async componentDidMount() {
    await this.getClientIP();
    await axios.get(`/api/geo-ipify?ipAddress=${this.state.clientIpaddr}`)
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
                loading: false,
				errMessage: "Please enter a valid IPv4 or IPv6 address"
            });

            if (err.response.data.code === 422) {
                this.inputRef.current.classList.add('input--error');
                this.smallRef.current.classList.remove('hidden');
            }
        });
  }

  handleInputChange = (e) => {
    this.setState({ inputIpaddr: e.target.value });
  }

  handleSubmit = () => {
    this.setState({ loading: true });
	this.inputRef.current.classList.remove('input--error');
	this.smallRef.current.classList.add('hidden');
	console.log(this.state);
    axios.get(`/api/geo-ipify?ipAddress=${this.state.inputIpaddr}`)
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
                loading: false,
				errMessage: "Please enter a valid IPv4 or IPv6 address"
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
          <section>
			<h1>IP Address Tracker</h1>
            <form>
              <section>
                <input onChange={this.handleInputChange} name='addr' type='text' placeholder='Search for any IP address or domain' defaultValue={this.state.clientIpaddr} onKeyPress={this.preventSubmitOnEnter} ref={this.inputRef} />
                <button aria-label="Get IP Information" onClick={this.handleSubmit} type='button'></button>
              </section>
              <small className='hidden' ref={this.smallRef}>{this.state.errMessage}</small>
            </form>
            <article className='addr__info'>
              <Section loading={this.state.loading} heading={SectionType.IPADDR} para={this.state.ipaddr} />
              <Section loading={this.state.loading} heading={SectionType.LOCATION} para={this.state.location} />
              <Section loading={this.state.loading} heading={SectionType.TIMEZONE} para={this.state.timezone} />
              <Section loading={this.state.loading} heading={SectionType.ISP} para={this.state.isp} />
            </article>
          </section>
        </div>
        <div className='map__container'>
          <Map loading={this.state.loading} lat={this.state.lat} lng={this.state.lng} />
        </div>
      </>
    );
  }
}

export default Main;
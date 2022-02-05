import React from 'react';
import axios from 'axios';
import Map from './Map';
import Section from './Section';

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

    getClientIP = () => {
        axios.get(`/apiIpify/?format=json`)
            .then(res => {
                this.setState({
                    clientIpaddr: res.data.ip
                })
            });
    }

    componentDidMount() {
        this.getClientIP();
        axios.get(`/apiGeoIpify/country,city?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ipAddress=${this.state.clientIpaddr}`)
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
        this.setState({
            inputIpaddr: e.target.value
        });
    }

    handleSubmit = () => {
        axios.get(`/apiGeoIpify/country,city?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ipAddress=${this.state.inputIpaddr}`)
            .then(res => {
                const locationString = `${res.data.location.city}, ${res.data.location.country} ${res.data.location.postalCode}`;

                this.setState({
                    ipaddr: res.data.ip,
                    location: locationString,
                    timezone: res.data.location.timezone,
                    isp: res.data.isp,
                    lat: res.data.location.lat,
                    lng: res.data.location.lng
                });
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
            <div>
                <main className='addr'>
                    <h1>IP Address Tracker</h1>
                    <form>
                        <input onChange={this.handleInputChange} name='addr' type='text' placeholder='Search for any IP address or domain' defaultValue={this.state.clientIpaddr} onKeyPress={this.preventSubmitOnEnter} />
                        <button onClick={this.handleSubmit} type='button'></button>
                    </form>
                    <div className='addr__info'>
                        <Section heading="IP Address" para={this.state.ipaddr} />
                        <Section heading="Location" para={this.state.location} />
                        <Section heading="Timezone" para={`UTC ${this.state.timezone}`} />
                        <Section heading="ISP" para={this.state.isp} />
                    </div>
                </main>
                {!this.state.loading && <Map lat={this.state.lat} lng={this.state.lng} />}
            </div>
        );
    }
}

export default Main;
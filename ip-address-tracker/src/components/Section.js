import React from 'react';

class Section extends React.Component {

    render() {
        return (
            <section className='addr__section'>
                <h2>{this.props.heading}</h2>
                <p>{this.props.para}</p>
            </section>
        );
    }
}

export default Section;
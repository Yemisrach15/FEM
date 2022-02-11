import React from 'react';
import { Placeholder } from 'semantic-ui-react';
import SectionType from './SectionType';
class Section extends React.Component {

    render() {
        if (this.props.loading) {
            return (
                <section className='addr__section'>
                    <h2>{this.props.heading}</h2>
                    <Placeholder style={{ maxWidth: "100%" }}>
                        <Placeholder.Paragraph style={{ height: 28 }} />
                    </Placeholder>
                </section>
            );
        }
        else {
            return (
                <section className='addr__section'>
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.heading === SectionType.TIMEZONE && this.props.para !== "-"? `UTC ${this.props.para}` : `${this.props.para}`}
                    </p>
                </section>
            );
        }
    }
}

export default Section;
/**
 * FinancialAssistanceContent.jsx
 * Created by David Trinh 10/9/2018
 **/

import React from 'react';
import PropTypes from 'prop-types';

import * as Icons from 'components/sharedComponents/icons/Icons';

const propTypes = {
    selectedAward: PropTypes.object,
    inFlight: PropTypes.bool
};

export default class FinancialAssistanceContent extends React.Component {
    render() {
        return (
            <div className="award-financial-assistance">
                <div className="award__heading">
                    <span className="award__heading_bold">{this.props.selectedAward.typeDescription}</span> <div className="award__heading-glossary"><Icons.Glossary /></div> | {this.props.selectedAward.id}
                    <hr className="award__heading-divider" />
                </div>
            </div>
        );
    }
}
FinancialAssistanceContent.propTypes = propTypes;

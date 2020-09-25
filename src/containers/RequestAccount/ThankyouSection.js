import React from 'react';
import Space from 'components/atoms/Space';

export const ThankyouSection = () => (
  <div className="thankyou-container">
    <Space size={100} />
    <span className="thank-you-text">Thank you!</span>
    <span className="tick-container">
      <span className="checkmark">
        <div className="checkmark_stem" />
        <div className="checkmark_kick" />
      </span>
    </span>
    <span className="thank-you-sub-text">
      Your request is being processed. You will hear back from your Brewery Admin or BreweryDB shortly.
    </span>
  </div>
);

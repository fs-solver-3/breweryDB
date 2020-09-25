import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Steps = ({
  active, justify, steps = [], onClickStep,
}) => (
  <div className={classNames('bd-steps', justify && `bd-steps--justify-${justify}`)}>
    {steps.map((step, i) => (
      <>
        <div
          onClick={() => onClickStep(step)}
          key={i}
          className={classNames(active === step ? 'active-step' : step < active ? 'highlight-step' : '')}
        />
        {i + 1 !== steps.length && <span className="step-line" />}
      </>
    ))}
  </div>
);

Steps.propTypes = {
  active: PropTypes.number,
  justify: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.number),
};

Steps.defaultProps = {
  onClickStep: () => {},
};

export default Steps;

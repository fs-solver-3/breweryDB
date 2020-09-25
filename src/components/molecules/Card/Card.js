import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({
  children, isEven, style, completion,
}) => (
  <div style={style} className={classNames('card', isEven && 'even-card')}>
    {completion && (
      <div
        className={classNames(
          'card--completion',
          completion < 100 ? 'card--completion-half' : 'card--completion-full',
        )}
      >
        Completion
        {`${completion}%`}
      </div>
    )}
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  isEven: PropTypes.bool,
  style: PropTypes.shape(),
  completion: PropTypes.number,
};

export default Card;

import React from 'react';
import styles from './fieldRadio.module.css';

const FieldRadio = (props) => {
  const { field } = props;

  return (
    <span className={styles.container}>
      <input
        {...props}
        {...field}
        type="radio"
        onChange={field.onChange}
        value={props.id}
        id={props.id}
        checked={props.id === field.value}
      />
      <span className={styles.checkmark} />
    </span>
  );
};

export default FieldRadio;

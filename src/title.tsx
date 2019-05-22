import React from 'react';
import styles from './todos.module.css';

const Title = React.memo(
  (): JSX.Element => (
    <div>
      <h2 className={styles['title']}>Todo, or not Todo</h2>
    </div>
  )
);
Title.displayName = 'Todo';
export default Title;

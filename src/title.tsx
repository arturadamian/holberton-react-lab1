import React from 'react';

const Title = React.memo((): JSX.Element => <div>Todo, or not Todo</div>);
Title.displayName = 'Todo';
export default Title;

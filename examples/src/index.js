import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { RubricBuilder } from 'ftw-rubric-builder';

const Application = () => (
  <Fragment>
    <h1>Finetune Rubric Builder Example</h1>
    <RubricBuilder />
  </Fragment>
);

ReactDOM.render(<Application />, document.getElementById('app'));

import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = () => (
  <div>

    <TextField
      hintText="Username"
      floatingLabelText="Username"
    /><br />
    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
    /><br />
  </div>
);

export default TextFieldExampleSimple;
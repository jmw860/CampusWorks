/*import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
 
const ReactComponent = () => (
  <RaisedButton label="Default" />
);
 
export default ReactComponent;*/
/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListExampleSimple from './Gridlist';
import RaisedButtonExample from './Raisedbutton';


const styles = {
  container: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'left',
    paddingTop: 50,
    paddingLeft: 100,
    width: '100%',
    backgroundColor: 'teal',
    marginBottom: 200,
    height: 100,
  },
  h2: {
    width: '25%',
    marginRight: 0,
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class ReactComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }




  render() {

    return (
        
      <MuiThemeProvider muiTheme={muiTheme}>

        <div style={styles.container}>
            <div style = {styles.header}>
             <h2 style={styles.h2}>Campus Works</h2>
                <div style={styles.h2}><RaisedButtonExample /></div>
            </div>
            <GridListExampleSimple />
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default ReactComponent;
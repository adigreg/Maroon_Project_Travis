import React, { useState, useEffect} from 'react';
import "rbx/index.css";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const pageThreeStyles = makeStyles(theme => ({
    bio:{
      marginTop: 20,
      marginBottom: 20,
    },
    button:{
      marginTop: 20,
    }
   }));

const PageThree = ({pagestate,settingdoctor}) => {
    const classes = pageThreeStyles();
    var insuranceSet = new Set();
    settingdoctor.doc.insurances.map(insurance=>insuranceSet.add(insurance.insurance_plan.name))
    return (
      <div>
      <h3><strong>{settingdoctor.doc.profile.first_name + " " + settingdoctor.doc.profile.last_name}</strong></h3>
      
      <p className={classes.bio}>
        <Divider/>
        {settingdoctor.doc.profile.bio}
        <Divider/>
      </p>
      
      <h1>Insurance Taken:</h1>
      {Array.from(insuranceSet).map(insurance =>
        <li>{insurance}</li>
        )}
      <Button className={classes.button} variant="contained" color="primary" align="center" size="large" onClick={function(event){pagestate.setpage(2)}}>go back</Button>
      </div>
    )
  }

  export default PageThree;
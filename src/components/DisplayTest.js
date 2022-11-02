import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useEffect, useState } from "react";

// import surveyJson from '../questions'

StylesManager.applyTheme("defaultV2");

function App({ blogs }) {
 
  
  const survey = new Model(blogs);
  return <Survey model={survey} />;
}

export default App;

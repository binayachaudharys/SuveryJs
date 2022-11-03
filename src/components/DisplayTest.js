import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useEffect, useState, useCallback } from "react";

// import surveyJson from '../questions'

StylesManager.applyTheme("defaultV2");

function App({ blogs }) {



  const survey = new Model(blogs);
  survey.focusFirstQuestionAutomatic = false;

  const titlesubmit = blogs.title;



  const alertResults = useCallback((sender) => {
    const results = sender.data;
    results["title"] = titlesubmit.toLowerCase();
    console.log(results);
    const jsonString = JSON.stringify(results);
    alert(jsonString);

    const createSuvery = async () => {

      await fetch('https://json-server-three-mu.vercel.app/formans', {
        method: 'POST',
        body: JSON.stringify(results),
        headers: { 'Content-Type': 'application/json' }
      })


    }
    createSuvery()

  }, []);







  // console.log(JSON.stringify(results));

  survey.onComplete.add(alertResults);
  return <Survey model={survey} />;
}

export default App;



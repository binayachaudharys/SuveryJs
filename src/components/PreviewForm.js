import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useCallback } from "react";

StylesManager.applyTheme("defaultV2");

function PreviewForm({title, description, setCreateForm}) {
    const formElements = useSelector(state => state.formElements)
    const [surveyJson, setSurveyJson] = useState({})

    useEffect(() => {
        setSurveyJson({
            title,
            description,
            elements: formElements
        })
        setCreateForm(false)
    }, [title, description, formElements])

    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    console.log(results);
    
  }, []);


 
// console.log(JSON.stringify(results));

  survey.onComplete.add(alertResults);
  
    return <Survey model={survey} />;
}

export default PreviewForm;

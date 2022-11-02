import { useEffect, useState, } from 'react'
import { useDispatch } from 'react-redux'

import { v4 as uuidv4 } from 'uuid';

import { editFormElement, removeFormElement,replaceFormElement } from '../redux/actions'
import Card from './Card'
import { FileUploader } from "react-drag-drop-files";




const FormElement = ({element, index, createQuestion, createForm}) => {
  const dispatch = useDispatch()
  const [question, setQuestion] = useState(`Question ${index + 1}`)
  const [isRequired, setIsRequired] = useState(false)
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const [dropDownList, setDropDownList] = useState([
    {id: uuidv4(), name: 'item1'},
    {id: uuidv4(), name: 'item2'},
    {id: uuidv4(), name: 'item3'},
    {id: uuidv4(), name: 'item4'},
  ])
  const [checkBoxList, setCheckBoxList] = useState([
    {id: uuidv4(), name: 'item1'},
    {id: uuidv4(), name: 'item2'},
    {id: uuidv4(), name: 'item3'},
    {id: uuidv4(), name: 'item4'},
  ])
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [ratings, setRatings] = useState([1, 2, 3,4])
  const [labelTrue, setLabelTrue] = useState("Yes")
  const [labelFalse, setLabelFalse] = useState("No")
 

  useEffect(() => {
    const submitFormElement = () => {
      var _formElement = {id: element.id, type: element.type, title: question, isRequired}
      switch(element.type) {
        case "text": 
          break
        case "dropdown":
          const choics = []
          dropDownList.forEach(list => (choics.push({value: list.name, text: list.name}))) 
          _formElement.choices = choics
          break
          case "checkbox":
          const choices = []
          checkBoxList.forEach(list => (choices.push({value: list.name, text: list.name}))) 
          _formElement.choices = choices
          break
        case "rating": 
          _formElement.rateValues = ratings
          break
        case "boolean":
          _formElement.labelTrue = labelTrue
          _formElement.labelFalse = labelFalse
          break
          case "comment":
           
            break
            case "file":
           
              break
        default: return
      }
      dispatch(editFormElement(_formElement))
    }

    createForm && submitFormElement()
  }, [createForm])

  const removeDropdownItem = (id) => {
    if (dropDownList.length > 2) {
      const newList = dropDownList.filter(list => (list.id !== id))
      setDropDownList(newList) 
    }
  }

  const updateDropdownItem = (id, value) => {
    const newList = []
    dropDownList.forEach(list => list.id === id ? newList.push({id, name: value}) : newList.push(list))
    setDropDownList(newList)
  }

  
  const removeCheckdownItem = (id) => {
    if (checkBoxList.length > 2) {
      const newList = checkBoxList.filter(list => (list.id !== id))
      setCheckBoxList(newList) 
    }
  }

  const updateCheckdownItem = (id, value) => {
    const newList = []
    checkBoxList.forEach(list => list.id === id ? newList.push({id, name: value}) : newList.push(list))
    setCheckBoxList(newList)
  }

  const removeRating = () => {
    if (ratings.length > 2) {
      const prevRatings = ratings
      prevRatings.pop()
      setRatings([...prevRatings])
    }
  }

  const renderFormElement = () => {
    switch(element.type) {
      case "text":
        return ( <input type="text" readOnly className="form-control" /> )
      case "dropdown":
        return (
          <>
            {dropDownList.map(dropDown => (
              <div key={dropDown.id} className="d-flex align-items-end mb-3">
                  {dropDownList.length > 2 &&  <i type="button" className="bi bi-dash-circle" onClick={() => removeDropdownItem(dropDown.id)} />}
                  <input className="question-input ms-3" type="text" value={dropDown.name} onChange={(e) => updateDropdownItem(dropDown.id, e.target.value)} />
              </div>
            ))}
            <div className="d-inline-flex">
              <button type="button" className="btn btn-secondary" onClick={() => setDropDownList(prev => [...prev, {id: uuidv4(), name: `item${dropDownList.length + 1}`}])}>
                <i className="bi bi-plus-circle"></i> Add Item
              </button>
            </div>
          </>
        )
      case "rating":
        return (
          <>
            <div className="d-flex flex-wrap">
              {ratings.map(rating => (
                  <span key={rating} className="bg-secondary rounded-5 p-3 text-white me-2">{rating}</span>
              ))}
            </div>
            <div className="mt-3">
              <i type="button" className="bi bi-dash-circle fs-3 me-3" onClick={() => removeRating()}></i>
              <i type="button" className="bi bi-plus-circle fs-3" onClick={() => setRatings(prev => [...prev, ratings.length + 1])} />
            </div>
          </>
        )
        case "checkbox":
          return (
            <>
              {checkBoxList.map(checkDown => (
                <div key={checkDown.id} className="d-flex align-items-end mb-3">
                    {checkBoxList.length > 2 &&  <i type="button" className="bi bi-dash-circle" onClick={() => removeCheckdownItem(checkDown.id)} />}
                    <input className="question-input ms-3" type="text" value={checkDown.name} onChange={(e) => updateCheckdownItem(checkDown.id, e.target.value)} />
                </div>
              ))}
              <div className="d-inline-flex">
                <button type="button" className="btn btn-secondary" onClick={() => setCheckBoxList(prev => [...prev, {id: uuidv4(), name: `item${checkBoxList.length + 1}`}])}>
                  <i className="bi bi-plus-circle"></i> Add Item
                </button>
              </div>
            </>
          )
      case "boolean":
        return (
          <span className="rounded-5 bg-secondary p-3 d-flex justify-content-between" style={{width: "fitContent"}}>
            <input className="question-input text-white boolean-input" type="text" value={labelTrue} onChange={(e) => setLabelTrue(e.target.value)} />
            <input className="question-input text-end text-white boolean-input" type="text" value={labelFalse} onChange={(e) => setLabelFalse(e.target.value)} />
          </span>
        )
        case "comment":
        return (  <textarea  className="form-control" /> )
        case "file":
        return (  <div>
          <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
        </div>)
      default: return
    }
  }

  const replaceQuestion = (id,type) => {
 if(id!==null && type!==null)
 {
  
  dispatch(removeFormElement(id));
  dispatch(createQuestion(type));
 }
  }
  return (
    <Card className="mb-3 position-relative">
        <button className="position-absolute  end-0 btn text-danger" onClick={() => dispatch(removeFormElement(element.id))} style={{ marginRight:"135px"}}>
          <i className="bi bi-trash3-fill"></i>
        </button>
        <h5>What would you like to ask?</h5>
        <input className="question-input my-3" type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        { renderFormElement() }
        <div className="d-flex justify-content-end mt-3 align-items-center">
          <button className='btn mr-2' > 
          <select name="texttype" id="typetext">
    <option  onClick={() => replaceQuestion(element.id, "text")} >Text</option>
    <option onClick={() => replaceQuestion(element.id, "dropdown")}>DropDown</option>
    <option  onClick={() => replaceQuestion(element.id, "rating")}>Rating</option>
    <option onClick={() => replaceQuestion(element.id, "checkbox")}>checkbox</option>
    <option onClick={() => replaceQuestion(element.id, "boolean")}>Boolean</option>
    <option onClick={() => replaceQuestion(element.id, "comment")}>Comment</option>
    <option onClick={() => replaceQuestion(element.id, "file")}>File</option>
  </select>
          </button>
          <button className="btn mr-2" onClick={() => createQuestion(element.type)}>
            <i className="bi bi-window-plus"></i>&nbsp;&nbsp;Duplicate
          </button>
          <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="flexSwitchCheckReverse" role="button">Required</label>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" checked={isRequired} onChange={() => setIsRequired(!isRequired)} />
          </div>
        </div>
    </Card>
  )
}

export default FormElement
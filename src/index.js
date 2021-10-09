import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
/* import App from './App'; */
import reportWebVitals from './reportWebVitals';






const App = () => {
  const [formValues, setFormValues] = useState([
    {
      name: 'John',
      surname: 'Travolta',
      days: 23,
      salaryPerDay: 100
    },
    {
      name: 'Ivan',
      surname: 'Ivanov',
      days: 15,
      salaryPerDay: 150
    },
    {
      name: 'Petr',
      surname: 'Petrov',
      days: 18,
      salaryPerDay: 175
    },
    {
      name: 'Sergey',
      surname: 'Sergov',
      days: 14,
      salaryPerDay: 110
    }
  ]);
  let handleChange = (index, event) => {
    let newFormValues = [...formValues];
    newFormValues[index][event.target.name] = event.target.value;
    setFormValues(newFormValues);
  }
  return (
    <div className="wrapper">
      <div className="container">
        {formValues.map((element, index) => (
          <div key={index}>
            <div>Name: {element.name}</div>
            <div>Surname: {element.surname}</div>
            <label htmlFor="days">Working days: </label>
            <input id="days" type="text" name="days" value={element.days} onChange={e => handleChange(index, e)} />
            <label htmlFor="salaryPerDay">Salary per day: </label>
            <input id="salaryPerDay" type="text" name="salaryPerDay" value={element.salaryPerDay} onChange={e => handleChange(index, e)} />
            <div>Salary for mounth: {element.days * element.salaryPerDay}</div>
          </div>
        ))}

      </div>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

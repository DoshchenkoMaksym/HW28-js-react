
function Row (props) {
  
    return (
        <div key={props.index}>
            <div>Name: {props.name}</div>
            <div>Surname: {props.surname}</div>
            <label htmlFor="days">Working days: </label>
            <input id="days" type="text" name="days" value={props.days} onChange={e => props.handleChange(props.index, e)} />
            <label htmlFor="salaryPerDay">Salary per day: </label>
            <input id="salaryPerDay" type="text" name="salaryPerDay" value={props.salaryPerDay} onChange={e => props.handleChange(props.index, e)} />
            <div>Salary for mounth: {props.days * props.salaryPerDay}</div>
          </div>
    )
}

export default Row;
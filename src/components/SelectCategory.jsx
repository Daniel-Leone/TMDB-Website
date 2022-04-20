import React from 'react'

const SelectCategory = (props) => {
  return (
    <div style={{display:'flex', flexDirection: 'column', margin:'1rem'}}>
        <label style={{color:'#ccc'}} for={props.labelAndSelect}>{props.labelAndSelect}</label>

            <select value={props.api} name={props.labelAndSelect} style={{cursor:'pointer'}} onChange={(event) => {
              props.setApi(parseInt(event.target.value))}}>

                <option value={props.op1Val}>{props.op1Name}</option>

                <option value={props.op2Val}>{props.op2Name}</option>

                <option value={props.op3Val}>{props.op3Name}</option>

                <option value={props.op4Val}>{props.op4Name}</option>

                <option value={props.op5Val}>{props.op5Name}</option>

                <option value={props.op6Val}>{props.op6Name}</option>

                <option value={props.op7Val}>{props.op7Name}</option>
            </select>
    </div>
  )
}

export default SelectCategory
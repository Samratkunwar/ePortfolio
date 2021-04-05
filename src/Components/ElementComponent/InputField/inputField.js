import React from 'react';
import './inputField.css';
// import Select from 'react-select';
// import TextField from '@material-ui/core/TextField';

const Input = (props) => {

    let inputElement        = null;
    let inputLabel          = null;
    let selectedFileLabel   = '';
    let focus               = 'form__input';

    switch (props.elementType) {

        case ('input'):
            inputElement = <input className={focus} {...props.elementConfig} value={props.value} onChange={props.changed} ></input>
            break;

        case ('textarea'):
            inputElement = <textarea className={focus} {...props.elementConfig} value={props.value} onChange={props.changed} ></textarea>
            break;

        case ('datetime'):
            // inputElement = 
            //     <div className={"datetime_field"}>
            //         <TextField  className={'datetime'} {...props.elementConfig} defaultValue={props.value} onChange={props.changed}
            //             InputLabelProps={{
            //             shrink: true,
            //             }}
            //         />
            //     </div>
            // break;

        case ('radio'):
            inputElement = <input {...props.elementConfig} />
            break;

        case ('Fileinput'):           
            inputElement = <input className="inputfile" id={props.elementConfig.label} {...props.elementConfig} onChange={props.fileInputChanged} ></input>;
            
            if ( props.value === null || props.value === undefined) {
                selectedFileLabel = 'Choose a file';
            } else {
                selectedFileLabel = props.value.name;
            }
            break;
        
        case ('Select'):
            // inputElement = <Select className={"select_input"} {...props.elementConfig} onChange={props.selectChanged} ></Select>
            break;
            
        default:
            inputElement = <input className={focus} {...props.elementConfig} value={props.value} onChange={props.changed} ></input>    
    }

    switch (props.elementType){
        case ('Fileinput'):
            inputLabel = <label className={"form__label"}>{props.label}<br></br>
                            <label className="fileLable" htmlFor={props.elementConfig.label}>
                                {selectedFileLabel}
                            </label>
                        </label>
            break;

        case ('datetime'):
            inputLabel = <label className={"form__label"}></label>
            break;
            
        default:
            inputLabel = <label className={"form__label"}>{props.label}</label>
    }


    return (
        <div>
            {inputElement}
            {inputLabel}            
        </div>
    )
}

export default Input;
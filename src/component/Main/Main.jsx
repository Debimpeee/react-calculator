import React, { useState } from 'react'
import "./Main.css"
import Display from '../Display/Display'
import Button from "../Button/Button"

const Main = () => {
    const [displayValue, setDisplayValue] = useState("")
    const [expression, setExpression] = useState("")
    const [isResultDisplayed, setIsResultDisplayed] = useState(false)


    const handleButtonClick = (value) =>{
        const limitLength = (str) => str.length <= 14 ? str : str.slice(0, 14)
        
        if(value === "C"){
            setDisplayValue("")
            setExpression("")
            setIsResultDisplayed(false)
        }
        else if(value === "<"){
            setDisplayValue((prevValue) => prevValue.slice(0, -1) || "")
            setExpression((prevValue) => prevValue.slice(0, -1) || "")
            setIsResultDisplayed(false)
        } 
        else if(["/", "x", "+", "-"].includes(value)){
            if(isResultDisplayed){
              setDisplayValue(displayValue + value);
              setExpression(displayValue + value);
            } else{
                setDisplayValue((prevValue) => limitLength(prevValue + value));
                setExpression((prevValue) => limitLength(prevValue + value));
            }
            setIsResultDisplayed(false)
        }
        else if(value === "%"){
            try{
                const result = (parseFloat(displayValue) / 100).toString()
                setDisplayValue(limitLength(result))
                setExpression(limitLength(result))
                setIsResultDisplayed(true)
            } catch(error){
                setDisplayValue("Error")
                setExpression("")
                setIsResultDisplayed(false)
            }
        }
        else if(value === "="){
            try{
              const result = eval(expression.replace(/x/g, '*')).toString()
              setDisplayValue(limitLength(result));
              setExpression("");
              setIsResultDisplayed(true)
            } catch(error){
              setDisplayValue("Error")
              setExpression("")
              setIsResultDisplayed(false)
            } 
        } else if(value === "."){
            if(displayValue === "") {
              setDisplayValue("0.")
              setExpression("0.")
            } else if (displayValue.slice(-1).match(/[\d]/) && !displayValue.split(/[\s/*+-]/).pop().includes(".")){
              setDisplayValue((prevValue) => limitLength(prevValue + value))
              setExpression((prevValue) => limitLength(prevValue + value))
            }
            setIsResultDisplayed(false)
          } else{
            if(isResultDisplayed){
              setDisplayValue(value)
              setExpression(value)
              setIsResultDisplayed(false)
            } else {
              if(displayValue.length < 14){
                setDisplayValue((prevValue) => limitLength(prevValue + value))
                setExpression((prevValue) => limitLength(prevValue + value))
            }
        }
    }      
  }  
  return (
    <div className='main'>
        <div className="calculator">
            <Display value={displayValue}/>
            <Button onButtonClick={handleButtonClick}/>
        </div>
    </div>
  )
}

export default Main

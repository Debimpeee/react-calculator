import React from 'react'
import "./Button.css"
import { LuDivide } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { HiOutlineBackspace } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";

const Button = ({onButtonClick}) => {
    const handleButtonClick = (value) =>{
        onButtonClick(value)
    }
  return (
    <div className='buttons'>
        <div className="button action clear only" onClick={() => {handleButtonClick("C")}}>
            <p>C</p>
        </div>

        <div className="button action operator division mains" onClick={() => {handleButtonClick("/")}}>
            <LuDivide />
        </div>

        <div className="button action operator multiplication mains" onClick={() => {handleButtonClick("x")}}>
            <LiaTimesSolid/>
        </div> 

        <div className="button action delete mains" onClick={() => {handleButtonClick("<")}}>
            <HiOutlineBackspace/>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("7")}}>
            <p>7</p>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("8")}}>
            <p>8</p>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("9")}}>
            <p>9</p>
        </div>

        <div className="button action operator subtraction mains" onClick={() => {handleButtonClick("-")}}>
            <FiMinus/>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("4")}}> 
            <p>4</p>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("5")}}>
            <p>5</p>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("6")}}>
            <p>6</p>
        </div>

        <div className="button action operator addition mains" onClick={() => {handleButtonClick("+")}}>
            <p>+</p>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("1")}}>
            <p>1</p>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("2")}}>
            <p>2</p>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("3")}}>
            <p>3</p>
        </div>

        <div className="button equal operator nons" onClick={() => {handleButtonClick("=")}}>
            <p>=</p>
        </div>

        <div className="button operator percent only" onClick={() => {handleButtonClick("%")}}>
            <p>%</p>
        </div>

        <div className="button number mains" onClick={() => {handleButtonClick("0")}}>
            <p>0</p>
        </div>

        <div className="button operator decimal mains" onClick={() => {handleButtonClick(".")}}>
            <p>.</p>
        </div>
    </div>
  )
}

export default Button

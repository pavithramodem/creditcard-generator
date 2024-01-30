import React,{useState} from "react";
import "./App.css";

export default function App() {
  const[nameInput,setNameInput] = useState("");
  const[numberInput,setNumberInput] = useState("");
  const[dateInput,setDateInput] = useState("");
  const[yearInput,setYearInput] = useState("");
  const[cvcInput,setCvcInput] = useState("");
  const[errorMessage,setErrorMessage] = useState("");
  const[nameError,setNameError] = useState("");
  const[numberError, setNumberError] = useState(" ")
  const[dateError, setDateError] = useState("");
  const[yearError, setYearError] = useState("");
  const[cvcError, setCvcError] = useState("");
  const[displayedInfo, setDisplayedInfo] = useState(null);
  
  const handleConfirm = () => {
    if (!nameInput || !numberInput || !dateInput || !yearInput || !cvcInput) {
      setErrorMessage("Please fill out all the mandatory fields in this form!!");
    } else {
      setErrorMessage("");
      const info = {
        name: nameInput,
        number: numberInput,
        date: `${dateInput}/${yearInput}`,
        cvc :cvcInput
      };
      setDisplayedInfo(info);
    }
  };

  
return(
    <div className ="box">
      <form onSubmit ={(e) =>{
          e.preventDefault();
          handleConfirm();
        }}>
        <section className="class">
          <b><label className ="App">CARDHOLDER NAME</label></b>
          <br/>
          <input  className ="name" value ={nameInput} type ="text" onChange ={(e)=>{
            setNameInput(e.target.value);
            const nameField = e.target.value;
            if (!/^[A-Za-z\s]*$/.test(nameField)) {
              setNameError("Name should only contain letters and spaces!!");
            } else {
              setNameError("");
            }
            setNameInput(nameField);
        
          }}></input>
        </section>
        <p className = "name1">{nameError}</p>
        <section className = "class1">
          <b><label className = "App1">CARD NUMBER</label></b>
          <input className ="number"  value ={numberInput}  maxLength ={19} onChange ={(e) => {
            setNumberInput(e.target.value);
            const value = e.target.value.replace(/ /g,"");
            let newValue = "";
            for(let i = 0; i<value.length; i++){
                    if (i>0 &&  i%4 === 0){
                         newValue += " ";
                    }
                    newValue += value[i]
            }
            setNumberInput(newValue);
            if(!/^[0-9]*$/.test(value)){
              setNumberError("Card number should contain only digits!!")
            }
            else{
              setNumberError("");
            }

          }}/>
          </section>
        <p className = "number1">{numberError}</p>
        <section className ="class2">
          <b><label className = "App2">EXP.DATE (MM/YY)</label>
          <span><label className ="month">CVC</label></span></b>
          <br/>
          
          <input className ="date"  value ={dateInput} maxLength ={2} onChange ={(e) =>{
            setDateInput(e.target.value);
            const dateField= e.target.value;
    if (!/^(0[1-9]|1[0-2])$/.test(dateField)) {
      setDateError("Month should be from 01 to 12!!");
    } else {
      setDateError("");
    }
    setDateInput(dateField);
           
          }}
          />
           
          <span><input className ="year"  value ={yearInput} maxLength ={4} onChange ={(e) =>{
            setYearInput(e.target.value);
            const yearField = e.target.value;
            const year = parseInt(yearField, 10);
            if (year < 2000 || year > 2050 || isNaN(year)) {
              setYearError("Year should be from 2000 to 2050!!");
            } else {
              setYearError("");
            }
            setYearInput(yearField);
            }}/></span>
          <span><input className ="cvc" value ={cvcInput}  maxLength={3} onChange ={(e) =>{
            setCvcInput(e.target.value);
            const cvcField = e.target.value;
            if(!/^[0-9]*$/.test(cvcField)){
              setCvcError("CVC field should contain only digits!!")
            }
            else{
              setCvcError("");
            }

          }}/></span>
        </section>
        <p className ="date1">{dateError}</p><span><p className ="year1">{yearError}</p></span><span><p className ="cvc1">{cvcError}</p></span>
        <button type = "submit"  className ="button">confirm</button>
        <p className ="para">{errorMessage}</p>
        <div className="credit-card-container">

        <img className ="credit" src= "https://i.ibb.co/ZfQKMLC/credit-card.png" alt ="credit card"/>
        {displayedInfo && (
            <div className="credit-card-overlay">
              <p className ="field1">{displayedInfo.name}</p>
              <p className ="field2"> {displayedInfo.number}</p>
              <p className ="field3">{displayedInfo.date}</p>
              <p className ="field4">{displayedInfo.cvc}</p>
            </div>
          )}
          <img className ="credit-cvc" src="https://i.ibb.co/bm2N2X4/cvc.jpg" alt ="cvc"/>
        </div>
        
      </form>
    </div>

  );
}

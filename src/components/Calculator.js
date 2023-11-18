import { useState } from "react"

const Calculator = ()=>{

    const [num1,setNum1]=useState('');
    const [num2,setNum2]=useState('');

    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const validateInputs = () => {
        if (!num1.trim() && !num2.trim()){
            setErrorMessage('Both fields are required');
            return false;
        }
        if (!num1.trim()) {
          setErrorMessage('Number 1 cannot be empty.');
          return false;
        }
        if (isNaN(Number(num1))) {
          setErrorMessage('Number 1 is not a valid number.');
          return false;
        }
        if (!num2.trim()) {
          setErrorMessage('Number 2 cannot be empty.');
          return false;
        }
        if (isNaN(Number(num2))){
            setErrorMessage('Number 2 is not a valid number.');
            return false;
        }
        setErrorMessage('');
        return true;
      };

    const performOperation =(operator)=>{

        if (!validateInputs()) {
            return;
        }

        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
    
        switch (operator) {
          case '+':
            setResult(number1 + number2);
            break;
          case '-':
            setResult(number1 - number2);
            break;
          case '*':
            setResult(number1 * number2);
            break;
          case '/':
            if (number2 === 0) {
              setErrorMessage('Cannot divide by zero.');
            } else {
              setResult(number1 / number2);
            }
            break;
          default:
            break;
        }
        setNum1('');
        setNum2('');
    }
    return(
        <div className="calc">
            <h1 id="heading">React Calculator</h1>
            <input type="text" placeholder="Num 1" value={num1} onChange={(e)=>setNum1(e.target.value)} />
            
            <input type="text" placeholder="Num 2" value={num2} onChange={(e)=>setNum2(e.target.value)} />
            <div className="btns">
                <button onClick={()=>{performOperation('+')}}>+</button>
                <button onClick={()=>{performOperation('-')}}>-</button>
                <button onClick={()=>{performOperation('*')}}>*</button>
                <button onClick={()=>{performOperation('/')}}>/</button>
            </div>
            {errorMessage && <div>
            <p style={{color:'red'}}>Error!</p>
            {errorMessage}
            </div>}
            {result !== null && !errorMessage && (
                <div>
                    <p style={{ color: 'blue' }}>Success!</p>
                    Result: {result.toFixed(2)} 
                </div>
            )}
        </div>
    )
}

export default Calculator;
import { useState } from "react"

export function Calculator() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operator, setOperator] = useState('')
    const [outcome, setOutcome] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

    let n1 = parseFloat(num1)
    let n2 = parseFloat(num2)

    if (operator === "+") {
        setOutcome(n1 +n2);
    } else if (operator === "-") {
        setOutcome(n1 - n2)
    } else if (operator === "*") {
        setOutcome(n1 * n2)
    } else if (operator === "/"){
        setOutcome(n1 /n2)
    } else {
        setOutcome("Something Wrong")
    }
}
return (
    <div className="Calculator componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>Number 1:
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>Operator:
            <input
              type="text"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              placeholder="+, -, x, ÷"
            />
          </label>
        </div>
        <div className="formRow">
          <label>Number 2:
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Calculate</button>
        <p>Result: {outcome}</p>
      </form>
    </div>
  );
}

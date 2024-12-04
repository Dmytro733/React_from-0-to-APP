import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({inputs}) {
  const investmentResults = calculateInvestmentResults(inputs);
  const initialInvestment = 
  investmentResults[0].valueEndOfYear 
  - investmentResults[0].annualInvestment 
  - investmentResults[0].interest;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentResults.map(result => {
            const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
            const totalAmountInvestment = result.valueEndOfYear - totalInterest;

            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvestment)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
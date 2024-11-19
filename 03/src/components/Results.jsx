import { formatter } from "../util/investment";
export default function Results({ annualData }) {
    const initialInvestment =
      annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest(Year)</th>
          <th>TotalInterest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map( 
          ({ year, interest, valueEndOfYear, annualInvestment }) => {
            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment;
              const totalAmountInvested = valueEndOfYear - totalInterest;
           return (
             <tr key={year}>
               <th>{year}</th>
               <th>{formatter.format(valueEndOfYear)}</th>
               <th>{formatter.format(interest)}</th>
               <th>{formatter.format(totalInterest)}</th>
               <th>{formatter.format(totalAmountInvested)}</th>
             </tr>
           );
    })}
      </tbody>
    </table>
  );
}
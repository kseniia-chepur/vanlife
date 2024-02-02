import { transactionsData } from "../../constants";
import "./Income.scss";

const Income = () => {

  return (
    <section className="income">
      <div className="income__content">
        <h1 className="income__title">Income</h1>
        {/* <p className="income__period">
          Last <span>30 days</span>
        </p> */}
      </div>
      <h2 className="income__amount">$2,260</h2>
      <div className="income__details">
        <h3 className="income__subtitle">Your transactions (3)</h3>
        <p className="income__period">
          Last <span>30 days</span>
        </p>
      </div>
      <div>
        {transactionsData.map(item => (
          <div key={item.id} className="income__transaction">
            <h3 className="income__transaction-amount">${item.amount}</h3>
            <p className="income__transaction-date">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Income;
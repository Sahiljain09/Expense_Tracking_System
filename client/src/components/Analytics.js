import React from "react";
import { Progress } from "antd";

const Analytics = ({ allTransection }) => {
  // total Transection
  const totalTransection = allTransection.length;
  const totalIncomeTransection = allTransection.filter(
    (transection) => transection.type === "income"
  );
  const totalExpenseTransection = allTransection.filter(
    (transection) => transection.type === "expense"
  );
  const totalIncomePercent =
    (totalIncomeTransection.length / totalTransection) * 100;
  const totalExpensePercent =
    (totalExpenseTransection.length / totalTransection) * 100;

  //   Total turnover
  const totalTurnover = allTransection.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = allTransection
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = allTransection
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercent =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercent =
    (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Transaction : {totalTransection}
            </div>
            <div className="card-body">
              <h5 className="text-sucess">
                Income : {totalIncomeTransection.length}{" "}
              </h5>
              <h5 className="text-danger">
                Expense : {totalExpenseTransection.length}{" "}
              </h5>
              <div>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomePercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpensePercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Turnover : {totalTurnover}
            </div>
            <div className="card-body">
              <h5 className="text-sucess">
                Income : {totalIncomeTurnover.length}{" "}
              </h5>
              <h5 className="text-danger">
                Expense : {totalExpenseTurnover.length}{" "}
              </h5>
              <div>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomeTurnoverPercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpenseTurnoverPercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;

import Appbar from "../../components/Appbar/Appbar";
import BudgetCard from "../../components/BudgetCard/BudgetCard";
import Category from "../../components/Category/Category";
import Investment from "../../components/icons/Investment";
import Savings from "../../components/icons/Savings";
import Expenses from "../../components/icons/Expenses";
import "./Finance.css";

const Finance = () => {
  return (
    <>
      <Appbar sectionName="Software Financiero" />
      <BudgetCard 
        budget={2000} 
        expensesValue={500} 
        savingsValue={800} 
        investmentsValue={400} 
      />
      <Category
        name="Inversion"
        Icon={Investment}
        categories={[
          {
            name: "AirBnb Quito",
            date: "14 Oct 2020",
            price: 150,
          },
          {
            name: "AirBnb Cuenca",
            date: "14 Oct 2020",
            price: 250,
          },
        ]}
      />
      <Category
        name="Ahorro"
        Icon={Savings}
        categories={[
          {
            name: "Fondo de Jubilacion",
            date: "14 Oct 2020",
            price: 650,
          },
          {
            name: "SaludSA",
            date: "14 Oct 2020",
            price: 150,
          },
        ]}
      />
      <Category
        name="Gastos"
        Icon={Expenses}
        categories={[
          {
            name: "Suscripcion a Netflix",
            date: "14 Oct 2020",
            price: 14,
          },
          {
            name: "Suscripcion a Spotify",
            date: "14 Oct 2020",
            price: 8,
          },
          {
            name: "zapatillas Nike",
            date: "14 Oct 2020",
            price: 78,
          },
          {
            name: "Silla Gamer",
            date: "14 Oct 2020",
            price: 400,
          },
        ]}
      />
    </>
  );
};

export default Finance;

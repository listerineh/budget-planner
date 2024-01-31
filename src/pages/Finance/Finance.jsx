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
      <BudgetCard />
      <Category
        name="Inversion"
        Icon={Investment}
        categories={[
          {
            name: "AirBnb Quito",
            date: "14 Oct 2020",
            price: 50,
          },
          {
            name: "AirBnb Cuenca",
            date: "14 Oct 2020",
            price: 100,
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
            price: 30,
          },
          {
            name: "SaludSA",
            date: "14 Oct 2020",
            price: 80,
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
            name: "KFC Calderon",
            date: "14 Oct 2020",
            price: 11.50,
          },
        ]}
      />
    </>
  );
};

export default Finance;

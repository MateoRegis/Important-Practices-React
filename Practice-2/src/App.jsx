import "./App.css";
import Table from "./components/Table";
function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const totalIncome = netIncomes.reduce(
    (acumulator, i) => acumulator + i.income,
    0
  );
  const average = totalIncome / netIncomes.length;
  return (
    <>
      <Table netIncomes={netIncomes} />

      <p className="text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-100 to-indigo-100 px-5 py-3 rounded-lg shadow-md">
        Promedio de ingreso de todas las marcas: ${Math.round(average)}
      </p>
    </>
  );
}

export default App;

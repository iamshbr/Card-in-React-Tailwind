import { Card } from "./components/Card";

const data = [
  {
    fullName: "Shabbir Muffadal",
    title: "Software Engineer",
    btnColor: "bg-red-700",
  },
  {
    fullName: "Bruce Wayne",
    title: "A Dark Knight",
    btnColor: "bg-slate-950",
  },
  {
    fullName: "Alfred",
    title: "Butler",
    btnColor: "bg-orange-900",
  },
];

function App() {
  return (
    <>
      <div className="container mx-auto sm:flex sm:justify-center mt-5">
        {data.map((person) => (
          <Card
            title={person.title}
            fullName={person.fullName}
            btnColor={person.btnColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;

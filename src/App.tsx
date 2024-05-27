import Dashboard from "./dashboard";

function App() {
  return (
    <div className="absolute h-full w-full bg-black">
      <div className="flex h-fit w-full justify-center bg-white">
        <div className="h-fit p-2 text-xl">DASHBOARD</div>
      </div>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;

import { StateContextProvider } from "contexts/ContextReducer";

import "./App.css";
import { AppComponent } from "./components/AppContent";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <StateContextProvider>
        <section>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="App">
            <Header />
            <AppComponent />
          </div>
        </section>
      </StateContextProvider>
    </>
  );
}

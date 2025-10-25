import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Article } from "./components/Article";
import { Table } from "./components/Table";
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Hero></Hero>
      <div className="flex flex-col md:flex-row mx-auto">
        <main className="flex-1">
          <Article></Article>
          <Table></Table>
        </main>

        <Aside></Aside>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

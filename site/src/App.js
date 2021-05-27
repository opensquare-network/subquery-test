import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query test {
    starterEntities(first: 10) {
      nodes {
        field1
        field2
        field3
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log({ loading, error, data });

  if (loading) return <div>loading...</div>;

  if (error) return <div>error</div>;

  return <div>{JSON.stringify(data)}</div>;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;

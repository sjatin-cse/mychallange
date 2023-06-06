import { ProductsContextProvider } from "./context";
import { useContext } from "react";
import { ProductsContext } from "./context";

import "./App.css";
import Nav from "./nav";
import Cards from "./cards";
import Card from "./Card1";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  const [flag, setflag] = useState(true);
  const { id } = useContext(ProductsContext);

  const handle = () => {
    const url =
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020";
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setData(res.data.results);
        setUser(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // setUser(data[id]);
  // useEffect(() => {
  //   const i = id;
  //   console.log(i, "updated");
  //   setUser(data[i]);
  // }, [id]);

  if (flag) {
    setflag(false);
    handle();
  }
  return (
    <ProductsContextProvider value="id">
      <div className="App">
        <Nav />

        {user && (
          <Card
            // name={user.name.title + " " + user.name.first + " " + user.name.last}
            // gender={user.gender}
            // location={user.location}
            d={data}
          />
        )}
        <div className="cardss">
          {{ data } &&
            data.map((d, i) => {
              return (
                <Cards
                  _id={i}
                  nat={d.nat}
                  name={d.name.title + " " + d.name.first + " " + d.name.last}
                  gender={d.gender}
                  email={d.email}
                  // onClick={setUser(d)}
                />
              );
            })}
        </div>
      </div>
    </ProductsContextProvider>
  );
}

export default App;

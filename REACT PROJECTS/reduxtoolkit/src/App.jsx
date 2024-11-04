import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductList, Header } from "./components";
import { updateUser } from "./Redux/cart";
import axios from "axios";
function App() {
   return (
      <Fragment>
         <Header />
         <ProductList />
      </Fragment>
   );
}

export default App;
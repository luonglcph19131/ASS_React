import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAdd from "./components/ProductAdd";
import Products from "./components/Products";
import ProductEdit from "./components/ProductEdit";
import Layout from "./layout/Layout";
import Content from "./components/Content";
// import Counter from "./components/Counter";

function App() {
    return (
        <>
        {/* <Counter/> */}
            {<Routes >
                <Route element={<Layout />}>
                    <Route path="/" element={<Content />} />
                    <Route path="/products" element={<Products />}/>
                    <Route path="/products/add" element={<ProductAdd />} />
                    <Route path="products/edit/:id" element={<ProductEdit />} />
                </Route>
            </Routes>}
        </>
    );
}

export default App;

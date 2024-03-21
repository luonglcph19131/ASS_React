import React, { useContext, useEffect } from "react";
import { IProduct } from "../interfaces/Product";   
import { ProductContext } from "../context/ProductContextProvider";
import { getProducts } from "../services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {

    // const [products, dispatch] = useContext(ProductContext); 
    // useEffect(() => {
    //     (async () => {
    //         const data = await getProducts();
    //         console.log("data", data);
    //         dispatch({ type: "SET_PRODUCTS", payload: data });
    //     })();
    // }, []);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`)
            return data
        }
    })

    const queryClient = useQueryClient();
    const { mutate: remove } = useMutation({
        mutationFn: async (id: number) => {
            const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
            return data;
        },
        onSuccess: () => {
            // refetching
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Lỗi</div>
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th >STT</th>
                        <th >Name</th>
                        <th >Price</th>
                        <th >Image</th>
                        <th >Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((product: IProduct, index: number) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><img src={product.image} alt="" width={80} /></td>
                                <td><Link to={`/products/edit/${product.id}`} className="btn btn-primary">Sua</Link> | <button type="button" className="btn btn-danger" onClick={() => remove(product.id!)}>Xoa</button></td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;

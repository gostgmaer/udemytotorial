import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context/GlobalCOntext";
import InvokeAPI, { cleanParam } from "../../Hooks/apiCallHttp";
import useHttp from "../../Hooks/httpHooks";
import ShowList from "./ShowList";

const Getdata = () => {
    const [movieList, setMovieList] = useState(null);
    const { httpCallError } = useGlobalContext()


    //   const GetDataFromFirebase = async () => {
    //     const res = await fetch(
    //       "https://react-tutorials-be6d1-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
    //       {
    //         method: "GET",

    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     const data = await res.json();
    //     console.log(Object.entries(data));
    //     setMovieList(await Object.entries(data));
    //   };

    const getData = async () => {
        let param = {
        };
        cleanParam(param)
        const res = await InvokeAPI(`movies.json`, "get", {}, {}, param);

        setMovieList(Object.entries(res))
    };


    // const param = {
    //     endPoint: 'movies.json'
    // }

    // const { data, error, loading, sendRequest } = useHttp(param)

    // useEffect(() => {
    //     data && setMovieList(Object.entries(data))
    // }, [data]);
    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="Getdata bg-light py-3">
            <div className="row m-auto col-6 g-3">
                <div className="col-12 m-auto">
                    <button
                        type="button"
                        name=""
                        onClick={getData}
                        id=""
                        className="btn btn-primary btn-lg btn-block">
                        Fetch Movie
                    </button>
                </div>
                {httpCallError ? <div className="error">{httpCallError}</div> : <div className="col-12 m-auto">
                    {movieList?.map((item) => (
                        <ShowList key={item["0"]} item={item["1"]}></ShowList>
                    ))}
                </div>}
            </div>
        </div>
    );
};

export default Getdata;

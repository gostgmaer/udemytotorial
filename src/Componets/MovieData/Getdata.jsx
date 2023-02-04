import React, { useEffect, useState } from "react";
import useHttp from "../../Hooks/httpHooks";
import ShowList from "./ShowList";

const Getdata = () => {
    const [movieList, setMovieList] = useState(null);

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

    const param = {
        endPoint: 'movies.json'
    }

    const { data, error, loading, sendRequest } = useHttp(param)

    useEffect(() => {
        data && setMovieList(Object.entries(data))
    }, [data]);

    return (
        <div className="Getdata bg-light py-3">
            <div className="row m-auto col-6 g-3">
                <div className="col-12 m-auto">
                    <button
                        type="button"
                        name=""
                        onClick={sendRequest}
                        id=""
                        className="btn btn-primary btn-lg btn-block">
                        Fetch Movie
                    </button>
                </div>
                {error ? <div className="error">{error}</div> : <div className="col-12 m-auto">
                    {movieList?.map((item) => (
                        <ShowList key={item["0"]} item={item["1"]}></ShowList>
                    ))}
                </div>}
            </div>
        </div>
    );
};

export default Getdata;

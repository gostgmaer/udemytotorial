import { async } from "@firebase/util";
import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useHref } from "react-router-dom";



const Form = () => {
    const [movie, setMovie] = useState(null);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    useEffect(() => {
        
        setMovie({ name: name, desc: desc, date: date })
    
    }, [name,desc,date]);

    const postDatatoFirebase = async () => {
      
      if(movie!==null){
        const res = await fetch(
            "https://react-tutorials-be6d1-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
            {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        console.log(await  res.json());
      }
    };

    return (
        <div className="m-auto">
            <div className="row m-auto col-6 g-3">
                <div className="col-12">
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Movie Title" value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <textarea
                        className="form-control"
                        style={{ resize: "vertical" }}
                        placeholder="Movie Description"
                        id=""
                        value={desc} onChange={(e) => setDesc(e.target.value)}
                        cols={30}
                        rows={5}></textarea>
                </div>
                <div className="col-12">
                    <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} id="date" />
                </div>

                <div className="col-12">
                    <button
                        onClick={postDatatoFirebase}
                        type="submit"
                        className="btn btn-primary">
                        Add Movie
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;

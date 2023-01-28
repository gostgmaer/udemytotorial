import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "./userContext";

const UserFrom = () => {
    const { users, setUsers, isOpen, itemHistory, setItemHistory, setIsOpen } = useUserContext();

    const [email, setemail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState('');
    const [error, setError] = useState("");

    const addToUserList = () => {
        if (email === "" || name === "" || age === "") {
            setError("all Fields are mandatory");

        } else if (users?.find((item) => item.email === email)) {
            setError("Email address already Present");

        } else {
            const obj = {
                name: name,
                email: email,
                age: age,
                id: users.length + 1,
                uuid: uuidv4(),
            };
            setUsers([...users, obj]);

            setAge('')
            setName('')
            setemail('')

            setError('')
        }
    };
    const UpdateUserList = () => {
        updateItem(itemHistory.id, name, email, age);
        setAge('')
        setName('')
        setemail('')
        setError('')
        setItemHistory(null)



    };
    const updateItem = async (id, name, email, age) => {
        const newItem = users.map((data) =>
            data.id === id ? { id, name, email, age } : data
        );
        setUsers(newItem);
    };
    useEffect(() => {
        if (itemHistory) {
            setName(itemHistory.name);
            setemail(itemHistory.email);
            setAge(itemHistory.age);
        } else {
            setAge('')
            setName('')
            setemail('')
            setError('')
        }
    }, [itemHistory]);


    return (
        <div className="UserFrom">
            <label className="is-invalid text-danger text-capitalize mb-3" >{error}</label>
            <div>
                <div className="mb-3">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Name"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Email Address"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        min={"0"}
                        value={age}
                        onChange={(e) => setAge(e.target.valueAsNumber)}
                        placeholder="Your Age"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>

                {itemHistory ? <button onClick={UpdateUserList} className="btn btn-primary">
                    Update User List
                </button> :
                    <button onClick={addToUserList} className="btn btn-primary">
                        Add to User List
                    </button>}

            </div>
        </div>
    );
};

export default UserFrom;

import { useState } from "react";
import Input from "../styles/Input";
import axios from "axios";

const AddAdmin = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFirstName = (event) => {
        // console.log(event);
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // creating the  js object to fetch data
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        };

        try {
            const response = await axios.post(`http://localhost:8081/api/admins`, data, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    }


    const handleCancel = (event) => {
        event.preventDefault();

        //clear the fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <h1>Add admin</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col ml-[20px] mt-[10px] mb-[10px] w-[400px]">
                        {/* styles are created using an external component */}
                        <Input type="text"
                            placeholder="First Name"
                            onChange={handleFirstName}
                            value={firstName}
                        />
                        <Input type="text"
                            placeholder="Last Name"
                            onChange={handleLastName}
                            value={lastName}
                        />
                        <Input type="text"
                            placeholder="Email"
                            onChange={handleEmail}
                            value={email}
                        />
                        <Input type="password"
                            placeholder="Password"
                            onChange={handlePassword}
                            value={password}
                        />
                        <div>
                            <button className="bg-blue-600 py-[10px] w-[100%] my-[5px] cursor-pointer hover:bg-blue-500 active:bg-blue-900"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                        <div>
                            <button className="bg-red-600 py-[10px] w-[100%] my-[5px] cursor-pointer hover:bg-red-500 active:bg-red-700"
                                onClick={handleCancel} type="button"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}


export default AddAdmin;
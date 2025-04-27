import { useState } from "react";
import Input from "../styles/Input";

const AddAdmin = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    return (
        <>
            <h1>Add admin</h1>

            <div>
                <form>
                    <div className="flex flex-col ml-[20px] mt-[10px] mb-[10px] w-[400px]">
                        {/* styles are created using an external component */}
                        <Input type="text" placeholder="First Name" onChange={handleFirstName} />
                        <Input type="text" placeholder="Last Name" onChange={handleLastName} />
                        <Input type="text" placeholder="Email" onChange={handleEmail} />
                        <Input type="text" placeholder="Password" onChange={handlePassword} />
                        <div>
                            <button className="bg-blue-600 py-[10px] w-[100%] my-[5px] cursor-pointer hover:bg-blue-500 active:bg-blue-900">Save</button>
                        </div>
                        <div>
                            <button className="bg-red-600 py-[10px] w-[100%] my-[5px] cursor-pointer hover:bg-red-500 active:bg-red-700">Cancel</button>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}


export default AddAdmin;
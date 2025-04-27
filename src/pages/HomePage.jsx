import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1 className="text-[30px]">This is home page</h1>
            <div>
                <div>
                    <Link to={`/addadmin`}>Add New Admin</Link> 
                </div>
            </div>
        </>
    )
}

export default HomePage;
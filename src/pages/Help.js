import { useNavigate } from "react-router-dom";

function Help({setSelectedItems}) {

    const navigate = useNavigate();

    const onClickhandler = () => {
        setSelectedItems([]);
        navigate("/")
    };

    return (
        <>
            <h1>server will help you!</h1>
            <button onClick={onClickhandler}>home</button>
        </>
    );
}

export default Help;
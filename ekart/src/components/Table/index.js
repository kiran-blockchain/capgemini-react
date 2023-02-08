import { useEffect, useState } from "react";
import axios from 'axios';
const Table = () => {
    const [info, setInfo] = useState([{ sno: "", name: "" }]);
    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v2/all");
                setInfo(response.data);
            }
            catch (ex) {
                console.log(ex);
            }
        }
        getInfo();
    }, []);
    const bindInfo = () => {
        return info.map((item, index) => {
            return <tr>
                <td>{item.sno}</td>
                <td>{item.name}</td>
            </tr>
        })
    }
    return (
        <table className="table">
            <thead>
                <th>S.No</th>
                <th>Name</th>
            </thead>
            <tbody>
                {bindInfo()}
            </tbody>
        </table>
    )
}
export default Table;
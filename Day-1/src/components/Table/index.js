const Table = () => {
    const users = [{ name: "Kiran", age: 30, profession: "Engineer" },
    { name: "Ravi", age: 20, profession: "Student" },
    { name: "John", age: 35, profession: "Doctor" }];
    return(
        <table className="table">
            <thead>
            <th>S.No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Profession</th>
            </thead>
            <tbody>
                {users.map((item,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.profession}</td>
                        </tr>
                    )
                })}
               
            </tbody>
        </table>
    )
}

export default Table;
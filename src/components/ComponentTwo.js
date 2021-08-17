import {Card, Table,Button} from "react-bootstrap"
const ComponentTwo=()=>{
    const user = {
        name: 'Hend',
        email: 'hend@mail.com',
        age: 25,
      };
      let myStyle={color:"red"}
      let inp=<input type="text" />
      let t=[1,2,3,4]
      let bool=true
    return (
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}} >
            <h3 style={myStyle} > {user.name}  </h3>
            <h3> {user.email}  </h3>
            <p> {user.age>18? "maj" :"min" } </p>
            {inp}
            {
                t.map(el=> <div>
                    <p> {el} </p>
                    <button>add</button>
                </div> )
            }
            {
                bool &&<Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table> 
            }
        </div>
    )
}
export default ComponentTwo
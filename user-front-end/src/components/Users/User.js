import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Placeholder } from "react-bootstrap";
const UserComp = () => {
  const [loading, setloading] = useState(false);
  const [userData, setUserData] = useState([]);

  const fetchUserData = () => {
    setloading(true);
    const xmlAPI = "http://localhost:3001/api/getxmlUsers";
    const jsonAPI = "http://localhost:3001/api/getJsonUsers";
    const requestXML = axios.get(xmlAPI);
    const requestJSON = axios.get(jsonAPI);
    axios
      .all([requestXML, requestJSON])
      .then(
        axios.spread((...responses) => {
          const responseXML = [
            ...responses[0].data.data.person,
            ...responses[1].data.data.person,
          ].sort((a, b) => a.id - b.id);
          setUserData(responseXML);
            setloading(false);
        })
      )
      .catch((errors) => {
          alert('internal server Error')
      });
  };

  const userTable = () => userData.map( user => {
    return  (
        <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>   
      </tr>
    )
    
  })
  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log("userData", userData);
  }, [userData]);

  return (
    <div>
      {loading || userData.length === 0 ? (
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
           <span>... Loading is in progress</span>
        </Placeholder>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {userTable()}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserComp;

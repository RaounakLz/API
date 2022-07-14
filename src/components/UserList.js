import React, { useEffect ,useState} from 'react'
import axios from "axios";
import { Card } from "react-bootstrap";



function UserList() {
    const [users, setusers] = useState([]);

    useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/users')
 .then((res) => setusers(res.data))
.catch((error) => console.log(error));

    }, []);
    console.log(users);

  return (
    <div className="caard">
        {users.map((el)=> (
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title className="info">{el.name}</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ textAlign: "center" }}
            >
              {el.username}
            </Card.Subtitle>
            <Card.Text className="info">
              Address: {el.address.street}/{el.address.city}/
              {el.address.zipcode}
            </Card.Text>
            <Card.Link href="#" className="info">
              {el.email}
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default UserList;
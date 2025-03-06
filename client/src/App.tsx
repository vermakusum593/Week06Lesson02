import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import './App.css';


interface Person {
  name: string;
  age: number;
  gender: string;
}

function App() {
  const [people, setPeople] = useState<Person[]>([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      setPeople(response.data.people);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi(); 
  }, []);

  return (
    <>
        <div>
          <h1>Details of all the person</h1>
          {people.length > 0 ? (
            <ul>
              {people.map((person, index) => (
                <li key={index}>
                  <strong>{person.name}</strong> <strong id='info'> Age: {person.age}, Gender: {person.gender}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
     
      
    </>
  );
}

export default App;

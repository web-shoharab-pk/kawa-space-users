import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Peoples from './components/Peoples/People';
import ShowPeople from './components/ShowPeople/ShowPeople';

function App() {

  const [peoples, setPeoples] = useState([]);
  const [people, setPeople] = useState({})

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
      .then(res => res.json())
      .then(data => setPeoples(data.results))
      .catch(err => console.log(err))
  }, [])

  const show_data_handle = (data) => {
    setPeople(data);
  }

  return (
    <main className="container">
      <Navbar />
      <ShowPeople people={people} />
      <section className="row my-5">
        {
          peoples.map(people => <Peoples key={people.location.coordinates.latitude} show_data_handle={show_data_handle} people={people} />)
        }
      </section>

    </main>
  );
}

export default App;

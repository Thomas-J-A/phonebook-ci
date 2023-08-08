import Person from "./Person";

const Persons = ({ persons, removePerson }) => (
  <table>
    <tbody>
      {persons.map((person) => (
        <Person key={person.name} person={person} removePerson={removePerson} />
      ))}
    </tbody>
  </table>
);

export default Persons;

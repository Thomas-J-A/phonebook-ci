import Button from "./Button";

const Person = ({ person, removePerson }) => (
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
    <td>
      <Button handleClick={() => removePerson(person.id)} text="Delete" />
    </td>
  </tr>
);

export default Person;

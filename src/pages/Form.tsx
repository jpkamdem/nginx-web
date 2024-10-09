import { useState } from "react";

export default function Form() {
  const [infos, setInfos] = useState({ lastName: "", firstName: "" });
  const [show, setShow] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const areInputsBlank =
      infos.firstName.trim() === "" || infos.lastName.trim() === "";
    if (areInputsBlank) {
      return;
    }
    setShow(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nom : </label>
        <input
          type="text"
          onChange={(e) => setInfos({ ...infos, lastName: e.target.value })}
          value={infos.lastName}
        />
        <label>Prénom : </label>
        <input
          type="text"
          onChange={(e) => setInfos({ ...infos, firstName: e.target.value })}
          value={infos.firstName}
        />
        <button
          type="submit"
          disabled={
            infos.firstName.trim() === "" || infos.lastName.trim() === ""
          }
        >
          Valider
        </button>
      </form>

      {show ? (
        <ul>
          <li>{infos.firstName}</li>
          <li>{infos.lastName}</li>
        </ul>
      ) : null}
    </>
  );
}

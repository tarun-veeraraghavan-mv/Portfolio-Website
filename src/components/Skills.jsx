import { useEffect, useState } from "react";
import { skills } from "../constants/data";

export default function Skills() {
  const [value, setValue] = useState("languages");

  let list = skills[value];

  useEffect(() => {
    list = skills[value];
  }, [value]);

  return (
    <div className="about-container">
      <p className="title">Technologies & Skills</p>

      <div className="skill-box-out">
        <select
          className="skill-select-box"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="languages">Languages</option>
          <option value="frameworks">Frameworks & Databases</option>
          <option value="devops">DevOps</option>
          <option value="testing">Testing & Tools</option>
        </select>
      </div>

      <ul className="skill-box-list">
        {list.map((s) => (
          <li className="skill-box" key={s.name}>
            <img src={s.imgUrl} className="skill-icon" />

            <p>{s.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect, useState } from "react";
interface programProps {
  title: string;
  id: number;
  poster: string;
}

function Programs() {
  const [programsfilms, setPrograms] = useState<programProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <>
      {programsfilms.map((programfilm) => (
        <div key={programfilm.id}>
          {programfilm.title}

          <img src={programfilm.poster} alt="" />
        </div>
      ))}
    </>
  );
}

export default Programs;

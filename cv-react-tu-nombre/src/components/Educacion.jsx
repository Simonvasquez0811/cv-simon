const Educacion = () => {
  const formacion = [
    {
      institucion: "SENA",
      curso: "Tecnólogo en Análisis y Desarrollo de Software",
      año: "2025"
    },
    {
      institucion: "Platzi",
      curso: "Curso de React",
      año: "2024"
    }
    // Agrega más si deseas
  ];

  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {formacion.map((edu, i) => (
          <li key={i}>{edu.curso} - {edu.institucion} ({edu.año})</li>
        ))}
      </ul>
    </section>
  );
};

export default Educacion;

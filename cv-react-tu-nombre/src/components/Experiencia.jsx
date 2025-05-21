const Experiencia = () => {
  const experiencias = [
    {
      cargo: "Ingeniero Aeroespacais",
      empresa: "NASA",
      año: "2024",
      descripcion: " diseño, desarrollo y mantenimiento de vehículos aéreos y espaciales."
    },
    // Agrega 3 más similares
  ];

  return (
    <section>
      <h2>Experiencia</h2>
      {experiencias.map((exp, i) => (
        <div key={i}>
          <h3>{exp.cargo} - {exp.empresa} ({exp.año})</h3>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
};

export default Experiencia;

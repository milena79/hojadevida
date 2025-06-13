const Educacion = () => {
    const formacionAcademica = [
      {
        year: "2024-2025",
        titulo: "Sena Centro de Industria y Construcción",
        institucion: "Sena - Actualmente - Ibagué Tolima"
      },
      {
        year: "2024-2027",
        titulo: "Ingenieria de sistemas",
        institucion: "Universidad del Tolima - Actualmente - Ibagué Tolima"
      },
      {
        year: "2023",
        titulo: "Bachiller Académico",
        institucion: "Colegio Franciscano Jiménez de Cisneros - Ibagué Tolima"
      }
    ];
  
    return (
      <section className="section">
        <h2>ESTUDIOS</h2>
        <div className="education-list">
          {formacionAcademica.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="year">{edu.year}</div>
              <div className="education-details">
                <h3>{edu.titulo}</h3>
                <p>{edu.institucion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Educacion;
const Habilidades = () => {
    const habilidad = [
      "Responsabilidad y compromiso",
      "Trabajo en equipo",
      "Aprendizaje autónomo",
      "Solución de problemas",
      "Adaptabilidad al cambio",
      "Buenas relaciones interpersonales",
      "Comunicación asertiva"
    ];
  
    return (
      <section className="section">
        <h2>HABILIDADES</h2>
        <ul className="skills-list">
          {habilidad.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Habilidades;
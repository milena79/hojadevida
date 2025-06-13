const Experiencia = () => {
    const experiencia = [
      {
        id: 1,
        empresa: "Servicio Nacional de Aprendizaje SENA",
        funciones: [
          "Desarrollo de proyectos prácticos aplicando conocimientos en:Diseño y desarrollo web:Maquetación de páginas web estáticas con HTML y CSS, priorizando estructuras funcionales.Bases de datos:Creación y gestión de bases de datos en MySQL (phpMyAdmin), ejecución de consultas básicas y diseño de esquemas relacionales.Control de versiones y colaboración:Uso de Git y GitHub para trabajo en equipo, manejo de repositorios y seguimiento de cambios en proyectos."
        ],
      },
      {
        id: 2,
        empresa: "Universidad del Tolima",
        funciones: [
          "Adquisición de competencias en:Programación Orientada a Objetos (POO):Implementación de principios como encapsulamiento, herencia y polimorfismo en Java y Python mediante proyectos académicos."
        ],
      }
    ];
  
    return (
      <section className="section">
        <h2>EXPERIENCIA </h2>
        <div className="experience-list">
          {experiencia.map(exp => (
            <div key={exp.id} className="experience-item">
              <h3>{exp.company}</h3>
              <h4>Funciones:</h4>
              <ul>
                {exp.funciones.map((func, index) => (
                  <li key={index}>{func}</li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experiencia;
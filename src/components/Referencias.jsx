const Referencias = () => {
    const references = [
      {
        name: "Sandra Milena Cruz",
        position: "Ingeniera DE sistemas",
        phone: "3133173035",
        email: "sandramilenacruzmolano@gmail.com"
      },
      {
        name: "Oscar Fernando Rojas",
        position: "Ingeniero DE sistemas",
        phone: "3142077870"
      }
    ];
  
    return (
      <section className="section">
        <h2>REFERENCIAS PERSONALES</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h3>{ref.name}</h3>
              <p>{ref.position}</p>
              {ref.description && <p>{ref.description}</p>}
              <p>Teléfono: {ref.phone}</p>
              {ref.email && <p>Email: {ref.email}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Referencias;
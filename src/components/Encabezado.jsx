// eslint-disable-next-line react-refresh/only-export-components
import foto from '../assets/foto.jpeg';


const Encabezado = () => {
  return (
    <header className="header">
      <img
        src={foto}
        alt="Foto del aspirante"
        className="foto-perfil"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />
      <h1>Sara Sofía Rodríguez Hernández</h1>
      <h2>Aprendiz Sena - Análisis y desarrollo de software</h2>
      <div className="contact-info">
        <p>Ibagué, Colombia</p>
        <p>Teléfono: 3143191393</p>
        <p>Email: sarisofia011@gmail.com</p>
      </div>
    </header>
  );
};

export default Encabezado;

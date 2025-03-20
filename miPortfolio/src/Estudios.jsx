export default function Estudios({ data }) {
  return (
    <div>
      <h3>Estudios</h3>
      <ul>
        {data.map((estudio, index) => (
          <li key={index}>
            {estudio.titulo} - {estudio.institucion} ({estudio.año})
          </li>
        ))}
      </ul>
    </div>
  );
}

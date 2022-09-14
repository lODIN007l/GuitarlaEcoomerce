import Guitarra from "./Guitarra";

const Listado = ({ guitarras }) => {
  //   console.log(guitarras);
  return (
    <div>
      {guitarras.map((guitarra) => (
        <Guitarra key={guitarra.url} guitarra={guitarra} />
      ))}
    </div>
  );
};

export default Listado;

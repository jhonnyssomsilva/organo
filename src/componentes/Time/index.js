import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const backgroundCss = { backgroundColor: props.corSecundaria };
  const destaqueCss = { borderColor: props.corPrimaria };

  return (
    <section className="time" style={backgroundCss}>
      <h3 style={destaqueCss}>{props.nome}</h3>
      <Colaborador />
    </section>
  );
};
export default Time;

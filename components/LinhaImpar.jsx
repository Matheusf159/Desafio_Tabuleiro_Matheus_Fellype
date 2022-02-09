import Quadrado from "./Quadrado";

export default function LinhaImpar() {
    return (
        <div style={{display: "flex", flexDirection:"row"}}>
            <Quadrado />
            <Quadrado cor="preto" />
            <Quadrado />
            <Quadrado cor="preto" />
            <Quadrado />
            <Quadrado cor="preto" />
            <Quadrado />
            <Quadrado cor="preto" />
            <Quadrado />
        </div>
    )
}
import Quadrado from "./Quadrado";

export default function LinhaPar() {
    return (
        <div style={{display: "flex", flexDirection:"row"}}>
            <Quadrado cor="preto" />
            <Quadrado />
            <Quadrado cor="preto" />
            <Quadrado />
            <Quadrado cor="preto" />
            <Quadrado />
            <Quadrado cor="preto" />
            <Quadrado />
            <Quadrado cor="preto"/>
        </div>
    )
}
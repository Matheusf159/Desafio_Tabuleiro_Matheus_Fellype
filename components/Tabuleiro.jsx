import LinhaImpar from "./LinhaImpar";
import LinhaPar from "./LinhaPar";

export default function Tabuleiro() {
    return (
        <div style={{width: 900, marginTop: 50, borderWidth: 20, borderStyle: "solid" ,borderColor: "#2e2e2e" }}>
            <LinhaImpar />
            <LinhaPar />
            <LinhaImpar />
            <LinhaPar />
            <LinhaImpar />
            <LinhaPar />
            <LinhaImpar />
            <LinhaPar />
        </div>
    )
}
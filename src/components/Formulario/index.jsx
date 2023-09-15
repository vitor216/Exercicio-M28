import { useEffect, useState } from "react";

import styles from './Formulario.module.css';

let nome = prompt("Informe o Nome do Paciente:");

const Formulario = () => {
    const [Altura, setAltura] = useState("");
    const [Peso, setPeso] = useState("");
    const [Resultado, setResultado] = useState(0);
    const [disabled, setDisabled] = useState(true);
    
    const calcular = () => {
        const Imc = Peso / (Altura * Altura);
        setResultado(Imc);
    };

    useEffect(() => {
        if (Altura > 0 && Peso > 0) {
            setDisabled(false);
        }else {
            setDisabled(true);
        }
    }, [Altura, Peso]);

    const Resetar = () => {
        setAltura("");
        setPeso("");
        setResultado(0);
    }

    return(
        <>
        <div className="container">
            <header>
                <h1 id='titulo1'><span id='titulo2'>Calculadora de </span>IMC</h1>
                <img src="data:image/png;base64,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" alt="logo" />
            </header>
        <div className="subtitulo">
            Olá, <span id='nome'>{nome}</span> vamos calcular seu IMC?
        </div>
            <div id='label'>
                <label id='labelDoInput1'>Altura <span id='ex'>(ex.: 1,70)</span></label>
                <label id='labelDoInput2'>Peso <span id='ex'>(ex.: 69,5)</span></label>
            </div>
        <form>
            <input type="number" value={Altura} placeholder="Metros" onChange={evento => setAltura(parseFloat(evento.target.value))} />
            <input type="number" value={Peso} placeholder="Quilos" onChange={evento => setPeso(parseFloat(evento.target.value))} />
        </form>
        <div className="Buttons">
            <button disabled={disabled} onClick={calcular} type="button">Calcular</button>
            <button onClick={Resetar} type="button">Resetar</button>
            </div>
        <div className="interpletacao">
            <table cellSpacing="0">
                <caption>Veja a interpretação do IMC</caption>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>CLASSIFICACÃO</th>
                        <th>OBESIDADE (GRAU)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Entre 25,0 e 29,9</td>
                        <td>Sobrepeso</td>
                        <td>I</td>
                    </tr>
                    <tr>
                        <td>Entre 30,0 e 39,9</td>
                        <td>Obesidade</td>
                        <td>II</td>
                    </tr>
                    <tr>
                        <td>Maior que 40,0</td>
                        <td>Obesidade Grave</td>
                        <td>III</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">
                        {Resultado > 0 && (
                            <div id="resultado">Seu IMC: {Resultado.toFixed(2)} </div>
                        )}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
        </div>
        </>
    )
}

export default Formulario;
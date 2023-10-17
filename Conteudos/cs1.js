   import CodeBox from "@/components/CodeBox/CodeBox"
    export default function ConteudoCs1() {
      
        return (
            <>
            <h1>Tipos de Dados em C#</h1>
<p>Primeiramente, para entender como a linguagem funciona e como estruturá-la, precisamos saber quais são os tipos de dados que podemos utilizar e trabalhar, já que é uma linguagem com tipagem estática. Sempre precisamos informar antecipadamente ao computador qual tipo de informação iremos armazenar ou retornar.</p>
<p>Os principais tipos existentes são:</p>
<ul>
    <li>
        <p>Tipos para Números</p>
        <ul>
            <li><strong>int</strong> - Significa um número inteiro, sem nenhum decimal ou vírgula (Ex: 0, 1, 2, 3, 10).</li>
            <li><strong>double</strong> - Significa um número com decimais (Ex: 1.2, 2.5, 10.234), lembrando que em programação os decimais são sempre separados por Ponto (.) e não Vírgula (,).</li>
        </ul>
        <p>Portanto, se você tentar armazenar, por exemplo, o número 2.5 como int, ele salvará como 2, pois não consegue trabalhar com esse tipo de número decimal. Então use corretamente. No caso de guardar um número inteiro como 2 na forma de double, ele irá guardar normalmente. Mas se você sabe que não irá utilizar números decimais, sempre use int, pois é a prática correta.</p>
        <h2>A forma que  Declaramos uma variável em C# na Sintaxe Basica é a seguinte : <strong>(tipo de dado que guardamos) + (o nome que queremos dar) = valor desejado</strong></h2>
            <CodeBox
                codigo={
                    `
                      int numeroInteiro = 1; 
                      double numeroDecimal = 2.3;  
                    `
                }
            />
    </li>

            <li>Tipos para Textos
                <ul>
                    <li><strong>string</strong> - Significa um conjunto de caracteres que forma um texto ou palavra (Ex: "Ola, Mundo") , sempre entre aspas duplas. <strong>Atenção</strong>  string "2" é diferente de int 2 por exemplo. Em um código voce irá receber um erro se tentar fazer "2" + 1 por exemplo, por isso o tipo de dado é tão importante.</li>
                </ul>
                <ul>
                    <li><strong>char</strong> - Significa UM único caracter de texto, a string é basicamente um conjunto de vários chars.(Ex :  'x') e estes sempre são declarados com aspas únicas simples.</li>
                </ul>
                <CodeBox codigo={
                    `
                    string nome = "Junior";
                    char PrimeiraLetraDoNome = 'J';
                    `
                }/>
            </li>

            <li>Tipo Booleano
                <ul>
                    <li><strong>bool</strong>  - Booleanos Significam um caso de Sim ou não , Verdadeiro ou Falso, que é representado sempre por true para Sim/Verdadeiro e por false para Não/Falso como se fosse um interruptor.</li> 
                </ul>
               
                <CodeBox codigo={
                    `
                    bool luzEstaAcesa = true;
                   // Digamos que apaguei esta lampada
                    luzEstaAcesa = false;
                    `
                }/>
            </li>
    
</ul>
            </>
        )
    }


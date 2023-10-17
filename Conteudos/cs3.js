import CodeBox from "@/components/CodeBox/CodeBox";

export default function ConteudoCs3() {
    return (
        <>
        <h1>Operações Matemáticas</h1>
        <p>Como na grande maioria das linguagens de programação, em C# as operações matemáticas básicas são definidas por :</p>
        <ul>
            <li><strong>+ </strong> para adição</li>
            <li><strong>- </strong> para subtração</li>
            <li><strong>* </strong> para multiplicação</li>
            <li><strong>/ </strong> para divisão</li>
        </ul>
        <p>Exemplo prático de usos:</p>
        <CodeBox
        codigo={`

        int x = 5;
        int y = 10;
        int z = x * y;
        // z será igual a 50

        int a = 5 * 10;
        // mesmo resultado
        `}
        />
        <p>Não é necessário sempre atribuir um valor para variáveis sempre que a declaramos, podemos dizer apenas o tipo e o nome que guardaremos e depois colocar um valor</p>
        <CodeBox
        codigo={
            `
            int x;
            x = 5;
            x = x * 2;
            // x será igual a 10

            `
        }/>
        <p>Perceba que na terceira linha <strong>x = x * 2</strong> estamos repetindo o x, pois se fizermos apenas x * 2, vamos multiplicar o valor de x , porém não iremos armazenar isso no valor da variável. Porém podemos encurtar este processo escrevendo o operador e o sinal de igual juntos.</p>
        <CodeBox codigo={`
        int x = 1;
        int y = 4;
        int z = 10;
        int a = 5;

        x += 2; // x ficaria guardado como 3 nesse caso

        y /= 2; // y será igual a 2 agora

        z *= 10; // z será igual a 100 agora

        a -= 2; // a será igual a 3 agora
    

        `}/>

        </>
    )
}
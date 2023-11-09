import CodeBox from "@/components/CodeBox/CodeBox";
import InputCodigo from "@/components/InputCodigo/InputCodigo";
import TituloDesafio from "@/components/TituloDesafio/TituloDesafio";

export default function ConteudoCs2() {
    return (
        <>
        <h1>Fazendo Seu primeiro Hello World</h1>
        <p>Para isso Precisamos entender como funciona a estrutura basica de um programa simples no C#.
O objetivo é escrever a string " Hello World" pelo console da aplicação que estiver usando, normalmente utilizamos o Visual Studio ou o Visual Studio Code para isso.</p>
<p>a sintaxe do C# funciona utilizando chaves &#123;
&#125; para agrupar blocos de código como desejarmos</p>
<p>Para executar algo precisamos primeiro colocar nosso codigo dentro de algo chamado namespace que é realmente um espaço de nomes que usamos para separação e organização de código.</p>
<CodeBox codigo={
    `
        namespace MeuPrograma 
        {
            //nosso código vem aqui dentro
        }
    `
}/>

    <p>No caso usaremos o namespace MeuPrograma, dentro dele precisamos de uma classe também para dizer onde nosso programa ficará, entraremos em detalhes de classes mais para frente. por enquanto apenas vamos dizer que estamos na classe Programa dentro do namespace MeuPrograma</p>
    <CodeBox codigo={
    `
        namespace MeuPrograma 
        {
            class Programa
            {
                //codigo virá aqui
            }
        }
    `
}/>
<p>Isso Tudo Serve para organização do código, já que em sistemas mais complexos podemos ter diversas classes, funções e namespaces diferentes. Assim fica muito mais fácil de saber aonde exatamente estamos mexendo.</p>
        <p>Tudo organizado agora precisamos criar uma função Main() , Literalmente a função principal do nosso código. Todo código em C# roda essa função quando nós o executamos, então vamos criar ela e colocar todo codigo la dentro</p>
        <CodeBox codigo={
    `
        namespace MeuPrograma 
        {
            class Programa
            {
                static void Main()
                {
                    // estamos dentro da nossa função
                }
            }
        }
    `
}/>
    <h1>Mas O que São Essas Coisas? Static? Void?</h1>
    <p>Lembra do que vimos sobre o C# ser uma lingugagem fortemente tipada e temos que descrever certinho o que cada tipo de nome ou número é, então, para funções não é diferente.</p>
    <p>A Estrutura de uma função funciona assim : <strong>(Forma de Comportamento da Função) + (O tipo de dado que a função irá retornar) + (Nome Da Função)</strong></p>
        <p>Vamos por partes, o Comportamento da função é opcional declar, somente colocamos quando desejamos um comportamento específico, no caso usamos <strong>static</strong> na Main. Isso quer dizer que é uma função estática, ou seja não podemos a alterar ou sobrescrever de forma alguma em outro lugar do código por exemplo, para a função Main isso é procedimento padrão por segurança e integridade e até o próprio compilador pede para declarar assim.</p>
        <p>Após isso vem o tipo de dado que retornamos, no caso como não retornaremos nada na função Main, declaramos o tipo como void (vazio).</p>
        <p>Finalmente, Após tudo isso e o nome da função, adicionamos os parentêses () aonde podemos ou não passar algo chamado argumento dentro que basicamente é a informação que a função usará. Isso será importante pois usaremos isso para escrever nosso Hello World.</p>
        <h2>Finalmente, com toda essa explicação podemos montar nosso primeiro código que será o Hello World.</h2>
        <p>O C# possui uma função nativa dele que é a Console , o Console possui vários métodos, Primeiramente vamos adicionar a biblioteca System do C# no nosso código pois é la que a função Console fica, depois disso o que usamos para escrever uma mensagem é o Console.WriteLine(). Daí é só colocar dentro dos parentêses () o que queremos escrever !</p>
        <CodeBox codigo={
            `  
            using System;
            namespace MeuPrograma
            {
                class Programa
                {
                    static void Main()
                    {
                        Console.WriteLine("Hello World!");
                        //resultado : Hello World!
                    }
                }
            }
            `
        }/>
        <h2> Importante : após Toda Linha de Código que acabar, que não seja uma função ou classe que tem as chaves após, PRECISA ADICIONAR ;</h2>
        <p>Também podemos fazer de outra forma, e se tivermos uma string salva, igual vimos no Módulo de Tipos de Dados ?</p>
        <p>Basta declarar dentro da função Main antes, e depois passar o nome da variável que você criou dentro do método do Console</p>
        <h2>Podemos também juntar o aprendido antes e salvar nossa frase numa variável e a escrever em vez de escrever diretamente.</h2>
        <CodeBox codigo={
            `
            namespace MeuPrograma
            {
                class Programa
                {
                    static void Main()
                    {
                        string frase = "Hello World!";
                        Console.WriteLine(frase);
                        //resultado : Hello World!
                    }
                }
            }
            `
        }/>
            <TituloDesafio/>
        <InputCodigo linguagem={'csharp'} codigoInicial={`using System;
        namespace MeuPrograma
             {
                 class Programa
                 {
                     static void Main()
                     {
                         
                     }
                 }
             }
    `} TituloProblema={'problema csharp test'} descricaoProblema={'Faça o Console Escrever o nome " José ", simples assim'} respostaEsperada={"José"}/>
        </>
    )
}

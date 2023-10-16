import Prism from 'prismjs';
import 'prismjs/components/prism-csharp';
import { useEffect } from 'react';
export default function CodeBox({codigo}) {
    useEffect(() => {
        Prism.highlightAll();
      }, []);
    return (
        <div className="code-box">
        <pre>
          <code className="language-csharp">
           {codigo}
          </code>
        </pre>
      </div>
    )
}
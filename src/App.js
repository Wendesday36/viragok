import { adatok } from "./adatok/adatok.js";
import Kategoriak from "./componensek/Kategoriak.js";
import Kivalasztott from "./componensek/Kivalasztott.js";

import { KivalasztProvider } from "./context/KivalasztContext.js";

function App() {
    return (
        <div className="container">
            <header className="App-header">
                <h1>React Context API</h1>
            </header>

            <KivalasztProvider>
                <section>
                    <h5 className="pt-5">Kiválasztott virágok</h5>
                    <Kivalasztott />
                </section>
                <article>
                    <Kategoriak lista={adatok} />
                </article>
            </KivalasztProvider>

            
            <footer>
                <p className="text-center">
                    <b>Próbáld ki, kísérletezz! Jó tanulást kívánok!</b>
                </p>
            </footer>
        </div>
    );
}

export default App;

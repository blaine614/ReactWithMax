import { CORE_CONCEPTS } from '../data.js';
import { CoreConcept } from './CoreConecpt.jsx';

export default function CoreConcepts(props) {
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map((item) => {
                return (
                    <CoreConcept key={item.title.toString()} {...item} />
                );
              })
            }
          </ul>
        </section>
    );
}
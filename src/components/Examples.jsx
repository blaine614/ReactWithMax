import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(props) {
    const [tabSelection, setTabSelection] = useState({ selection: null, clicked: false });

    function handleTabSelect(selectedButton) {
        setTabSelection({ selection: selectedButton, clicked: true });
    }

    let tabContent = (<p>Please select a topic.</p>);

    if(tabSelection.clicked) {
        tabContent = (
        <div id="tab-content">
            <h3>{EXAMPLES[tabSelection.selection].title}</h3>
            <p>{EXAMPLES[tabSelection.selection].description}</p>
            <pre>
            <code>
                {EXAMPLES[tabSelection.selection].code}
            </code>
            </pre>
        </div>
        );
    }

    const buttons = (
        <>
            <TabButton
                isSelected={tabSelection.selection === "components"}
                onClick={() => handleTabSelect("components")}
            >
                {EXAMPLES["components"].title}
            </TabButton>
            <TabButton
                isSelected={tabSelection.selection === "jsx"}
                onClick={() => handleTabSelect("jsx")}
            >
                {EXAMPLES["jsx"].title}
            </TabButton>
            <TabButton
                isSelected={tabSelection.selection === "props"}
                onClick={() => handleTabSelect("props")}
            >
                {EXAMPLES["props"].title}
            </TabButton>
            <TabButton
                isSelected={tabSelection.selection === "state"}
                onClick={() => handleTabSelect("state")}
            >
                {EXAMPLES["state"].title}
            </TabButton>
        </>
    );


    return (
        <Section title="Examples" id="examples" className="examples">
            <Tabs 
                buttonsContainer="menu" /* this is a dynamically set component, 
                you can use either built-in using a string or custom using a pointer to 
                the custom component */
                buttons={buttons}
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
export default function Tabs({ children, buttons, buttonsContainer="menu" }) {
    /* Here we have to remap the lowercase prop to an uppercase local const to 
       allow the component to be set like a custom component, even though what it might 
       be getting set to might be a built-in component like "main" */
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}
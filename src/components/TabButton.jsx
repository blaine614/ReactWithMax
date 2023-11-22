export default function TabButton({ children, isSelected, ...props}) {
    // document.querySelector('button').addEventListener('click', () => {
    //     //Do something when the button is clicked
    // });

    return (
        <div>
            <li>
                <button 
                    className={isSelected ? "active" : null}
                    {...props}
                >
                        {children}
                </button>
            </li>
        </div>
    );
}
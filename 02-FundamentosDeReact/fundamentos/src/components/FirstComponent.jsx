// arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // esta funçao faz isto
    return (
        <div>
            {/* Algum commentário */}
            <h1>Meu primeiro componente</h1>
            <MyComponent a={'FistComponent.jsx'} />
        </div>
    );
};
export default FirstComponent;
import { useLayoutEffect, useEffect, useState } from "react";

const HookUseEffectLayout = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    //console.log("2");
    setName("Mudou de novo!");
  }, []);

  // useLayoutEffect é executado antes de tudo ie: outros useEffects
  useLayoutEffect(() => {
    //console.log("1");
    setName("Outro nome");
  }, []);

  //console.log(name);

  return (
    <div>
      <h2>177 useEffectLayout</h2>
      <h5>useLayoutEffect é executado antes de tudo ie: outros useEffects</h5>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseEffectLayout;
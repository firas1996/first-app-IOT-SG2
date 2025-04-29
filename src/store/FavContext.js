import { createContext, useEffect, useState } from "react";

const FavStore = createContext({
  DATA: [],
  FavList: [],
  addItem: () => {},
  updateItem: () => {},
});
export default FavStore;

export const FavProvider = ({ children }) => {
  const [DATA, setDATA] = useState([]);
  const [favList, setFavList] = useState([]);
  console.log(DATA);
  const addItem = (imp) => {
    if (imp.trim().length > 0) {
      setDATA([...DATA, { id: Math.random(), name: imp, isFav: false }]);
      //   setImp("");
    }
    console.log(DATA);
  };
  useEffect(() => {
    setFavList(
      DATA.filter((item) => {
        return item.isFav;
      })
    );
  }, [DATA]);
  const updateItem = (id) => {
    setDATA(
      DATA.map((item) => {
        return item.id === id ? { ...item, isFav: !item.isFav } : item;
      })
    );
  };
  return (
    <FavStore.Provider
      value={{
        DATA: DATA,
        FavList: favList,
        addItem: addItem,
        updateItem: updateItem,
      }}
    >
      {children}
    </FavStore.Provider>
  );
};

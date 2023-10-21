import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";

const allCategories = [
  "all",
  ...new Set(menu.map((menuItem) => menuItem.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItemsByCategory = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Categories
          categories={categories}
          filterItemsByCategory={filterItemsByCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;

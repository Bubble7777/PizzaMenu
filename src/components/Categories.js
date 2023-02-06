import { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const handletSetCategories = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categ, index) => {
          return (
            <li
              key={index}
              onClick={() => handletSetCategories(index)}
              className={index === activeIndex ? 'active' : ''}
            >
              {categ}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;

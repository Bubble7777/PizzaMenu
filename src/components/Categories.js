function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categ, index) => {
          return (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={index === value ? 'active' : ''}
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

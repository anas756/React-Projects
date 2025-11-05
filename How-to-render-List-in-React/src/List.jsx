function List(props){
    
    // fruits.sort(); only works for lists not list objects

    // How to sort List Objects :
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); Reversed Alphabetical
    // fruits.sort((a,b) => a.calories - b.calories); Numeric
    // fruits.sort((a,b) => b.calories - a.calories); reverse Numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const HighCalFruits = fruits.filter(fruit => fruit.calories > 100);

    const Category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                           </li>);
    return( <>
            <h3 className="list-category">{Category}</h3>
            <ul className="list-items">{listItems}</ul>
            </>
    )
}
List.defaultprops = {
    category: "Category",
    items: [],
}
export default List
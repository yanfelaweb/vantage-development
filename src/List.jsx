
function List (){
  const fruits = [
  {id: 1, name:"Apple", calories: 10},
   {id: 2, name:"PineApple", calories:20},
  {id: 3, name:"mango", calories:30},
  {id: 4, name:"watermelon", calories:40},
  {id: 5, name:"cherry", calories:59},
    

  ];
  fruits.sort((a,b) => a.name.localeCompare(b.name));
  fruits.sort((a,b) => b.name.localeCompare(a.name));  
  fruits.sort((a,b) => b.calories -a.calories); 
  const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
  const ListItems = highCalFrruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name} &nbsp; <b>{highCalFruit.calories}</b></li>)
  // const ListItems = fruits.map(fruits => <li key={fruits}>{fruits}</li>)
  // const ListItems = fruits.map(fruit=> <li key={fruit.id}>
    // {fruit.name} &nbsp;
    // <b>{fruit.calories}</b>
    // </li>)
  return (<ol className="pl-6 list-decimal">{ListItems}</ol>)
}

export default List; 
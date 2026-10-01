
function Food(){
    const food1 = "Rice";
    const food2 = "Beans";
    return (
        <>
        <h1>Food is life</h1>
        <ul>
            <li>Pizza</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        </>
    );
}
export default Food;
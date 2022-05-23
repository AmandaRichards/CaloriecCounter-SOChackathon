function Budget({ items }) {
  function reduceFunction(cur, acc) {
    return cur + acc.itemTotal;
  }

  let caloriesConsumed = items.reduce(reduceFunction, 0);

  return (
    <div>
      <h3> {' ' + 3000 - caloriesConsumed + ' '} Calories Remaining Today</h3>
      <h2>What shall you eat next?</h2>
    </div>
  );
}

export default Budget;

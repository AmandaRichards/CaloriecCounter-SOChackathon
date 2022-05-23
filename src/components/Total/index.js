import styled from "styled-components"

function Total({ items }) {
  function reduceFunction(cur, acc) {
    return cur + acc.itemTotal;
  }

  let caloriesConsumed = items.reduce(reduceFunction, 0);

  return (
    <div>
      <StyledTotal>
        You have consumed
        {' ' + caloriesConsumed + ' '}
        calories today
      </StyledTotal>
    </div>
  );
}

export default Total;

const StyledTotal= styled.h3 `
color: red`
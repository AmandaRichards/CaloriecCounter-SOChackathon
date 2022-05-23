import Button from '../Button';
import Input from '../Input';
import styled from 'styled-components';

function List({ items, handleChange, handleClick }) {
  return (
    <StyledMain>
      {items.map((item, index) => {
        return (
          <section key={index}>
            <StyledHeading>{item.itemText}</StyledHeading>
            <p>Calories: {item.itemTotal}</p>
            <Input handleChange={handleChange} key={item.id} />
            <Button
              handleClick={handleClick}
              index={index}
              key={item.itemText}
            />
          </section>
        );
      })}
    </StyledMain>
  );
}

export default List;

const StyledHeading = styled.h2`
color: #e76f51`

const StyledMain = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
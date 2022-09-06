import { useState, useRef, useEffect } from 'react';

import { useOutsideClickCloser } from '../../hooks';
import { SelectContainer, StyledSelect, OptionsList, Option } from './index';

function Select(props) {
  const { options, name, initialValue, changeHandler, clear, ...otherProps } =
    props;
  const [selectActive, setSelectActive] = useState(false);
  const [selectValue, setSelectValue] = useState(initialValue || '');
  const optionsListRef = useRef();
  const selectorRef = useRef();
  useOutsideClickCloser(selectorRef, setSelectActive);

  const toggleOptionsListHandler = (e) => {
    if (optionsListRef.current.contains(e.target)) return;

    setSelectActive(!selectActive);
  };

  const updateSelectValue = async (e) => {
    const value = e.target.innerHTML;

    const event = {
      target: {
        name: name,
        value: value
      }
    };

    changeHandler(event);

    setSelectValue(value);
  };

  const keydownHandler = (e) => {
    e.preventDefault();

    const { key } = e;

    let value = selectValue;

    const index = options.findIndex((option) => option === selectValue);

    if (index === -1) {
      value = options[0];
    }

    if (key === 'ArrowDown' && index !== -1) {
      value = index < options.length - 1 ? options[index + 1] : options[0];
    }

    if (key === 'ArrowUp' && index !== -1) {
      value = index === 0 ? options[options.length - 1] : options[index - 1];
    }

    const event = {
      target: {
        name: name,
        value: value
      }
    };

    changeHandler(event);

    setSelectValue(value);
  };

  useEffect(() => {
    if (clear) setSelectValue('');
  }, [clear]);

  return (
    <SelectContainer
      active={selectActive}
      ref={selectorRef}
      {...otherProps}
      onClick={toggleOptionsListHandler}
      onKeyDown={keydownHandler}
    >
      <StyledSelect
        {...otherProps}
        shrink={selectActive}
        type='text'
        value={selectValue}
        name={name}
        readOnly
      />

      <OptionsList ref={optionsListRef} show={selectActive}>
        {options.map((option) => (
          <Option active={selectValue === option} onClick={updateSelectValue}>
            {option}
          </Option>
        ))}
      </OptionsList>
    </SelectContainer>
  );
}

export default Select;

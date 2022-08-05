import { Fragment } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { SearchForm } from './stores.styles';

function StoresLayout() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const children = Array.from(e.target);
    const [inputField] = children.filter((child) => child.nodeName === 'INPUT');

    const searchTerm = inputField.value;

    navigate(`../search/${searchTerm}`);
  };

  return (
    <Fragment>
      <SearchForm
        darkBorder
        type='search'
        fieldLabel='Que loja está procurando?'
        buttonLabel='buscar'
        onSubmit={submitHandler}
      />

      <Outlet />
    </Fragment>
  );
}

export default StoresLayout;

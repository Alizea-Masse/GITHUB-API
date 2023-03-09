// == Import
import PropTypes from 'prop-types';
import './style.scss';
import { Input, Segment, Form } from 'semantic-ui-react';
// == Composant
function SearchBar({ search, setSearch, getPosts }) {
  return (
    <Segment>
      <Form onSubmit={getPosts}>
        <Input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          placeholder="votre recherche"
          fluid
          icon="search"
          iconPosition="left"
        />
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
};

// == Export
export default SearchBar;

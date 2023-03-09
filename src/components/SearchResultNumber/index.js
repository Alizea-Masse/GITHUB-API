// == Import
import './style.scss';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Composant
function SearchResult({ message }) {
  return (

    <Message>{message}</Message>

  );
}

SearchResult.propTypes = {
  message: PropTypes.string.isRequired,

};

// == Export
export default SearchResult;

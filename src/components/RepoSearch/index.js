// == Import
import './style.scss';
import { useState } from 'react';
import axios from 'axios';
import { Menu, Segment } from 'semantic-ui-react';
import {
  NavLink, Route, Routes, Link,
} from 'react-router-dom';
import SearchBar from '../SearchBar';
import SearchResult from '../SearchResultNumber';
import Posts from '../Posts';
import FAQ from '../FAQ';
import githubLogo from '../../assets/images/logo-github.png';

// == Composant
function RepoSearch() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('Veuillez faire une recherche');
  const [page, setPage] = useState(1);

  const getPosts = async () => {
    try {
      setPage(1);
      setMessage('Patientez...');
      const response = await axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=9`);
      setPage(2);
      // console.log(response.data.items);
      setPosts(response.data.items);
      if (response.data.total_count > 1) {
        setMessage(`Votre recherche a donné ${response.data.total_count} résultats`);
      }
      else {
        setMessage(`Votre recherche a donné ${response.data.total_count} résultat`);
      }
    }
    catch (error) {
      console.error(error);
      setMessage('Recherche incorrecte');
      setPosts([]);
    }
  };

  const loadMore = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${page}&per_page=9`);
      setPage(page + 1);
      setPosts([...posts, ...response.data.items]);
      if (response.data.total_count > 1) {
        setMessage(`Votre recherche a donné ${response.data.total_count} résultats`);
      }
      else {
        setMessage(`Votre recherche a donné ${response.data.total_count} résultat`);
      }
    }
    catch (error) {
      console.error(error);
      setMessage('Recherche incorrecte');
    }
  };

  return (
    <div className="repoSearch">
      <Link to="/"><img className="githubImg" alt="github" src={githubLogo} /></Link>

      <Menu as="nav">
        <Menu.Item as={NavLink} to="/">
          Recherche
        </Menu.Item>
        <Menu.Item as={NavLink} to="/faq">
          FAQ
        </Menu.Item>
      </Menu>
      <Routes>
        <Route
          path="/"
          element={(
            <><SearchBar search={search} setSearch={setSearch} getPosts={getPosts} />
              <SearchResult message={message} />
              <Posts loadMore={loadMore} posts={posts} />
            </>
)}
        /><Route />
        <Route
          path="/faq"
          element={(
            <FAQ />
)}
        /><Route />
        <Route
          path="/*"
          element={<Segment as="p">Page non trouvée</Segment>}
        /><Route />
      </Routes>

    </div>

  );
}

// == Export
export default RepoSearch;

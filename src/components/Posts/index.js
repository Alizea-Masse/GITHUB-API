import './style.scss';
import PropTypes from 'prop-types';
import { Segment, Button } from 'semantic-ui-react';
import { useEffect } from 'react';
import Post from '../Post';

// == Composant
function Posts({ posts, loadMore }) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > document.body.scrollHeight - window.innerHeight - 200) {
        console.log('loadMore();');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div> {posts.length > 0
      && (
      <Segment fluid>
        <Button onClick={loadMore}>Voir plus de résultats</Button>
      </Segment>
      )}
    </>

  );
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
  loadMore: PropTypes.func.isRequired,
};

// == Export
export default Posts;

/* eslint-disable camelcase */
import './style.scss';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

// == Composant
function Post({
  name, description, owner, html_url,
}) {
  return (
    (
      <Card href={html_url}>
        <Image src={owner.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{owner.login}</span>
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
      </Card>
    )

  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
};

// == Export
export default Post;

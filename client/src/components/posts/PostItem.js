import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => (
  <div class='post bg-white my-1 p-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img class='round-image' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p class='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <button class='btn'>
        <i class='fas fa-thumbs-up' />{' '}
        {likes.length > 0 && <span>{likes.length}</span>}
      </button>
      <button class='btn'>
        <i class='fas fa-thumbs-down' />
      </button>
      <Link to='/post' class='btn btn-primary'>
        Discussion{' '}
        {comments.length > 0 && (
          <span className='comment-count'>{comments.length}</span>
        )}
      </Link>
      {!auth.loading && user === auth.user._id && (
        <button type='button' className='btn btn-danger'>
          <i className='fas fa-times' />
        </button>
      )}
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PostItem);

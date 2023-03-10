import React from 'react';
import { Link } from 'react-router-dom';

const ArtList = ({
  art,
  title,
  showTitle = true,
  showUsername = true,
  handleDeleteArt = this.handleDeleteArt,
  closebutton,
}) => {
  if (!art.length) {
    return <h3>No Gallery Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {art &&
        art.map((x) => (
          <div key={x._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${x.thoughtAuthor}`}
                >
                  {x.artTitle} <br />
                  <span style={{ fontSize: '1rem' }}>
                    Added by {x.thoughtAuthor}
                  </span>
                </Link>
              ) : (
                <>
            <Link className="text-light"
 to={`/art/${x._id}`}
            >
                  {x.artTitle}</Link>
                  {closebutton ? (<span onClick={() => handleDeleteArt(x._id)} style={{ fontSize: '3rem', float: 'right', cursor:'pointer'}}>&times;</span>) : <></> }
                  <br />
                  <span style={{ fontSize: '1rem' }}>
                    {x.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <img src={x.artImage} />
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/art/${x._id}`}
            >
              Join the discussion on this art piece.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ArtList;

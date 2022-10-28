export const User = ({ user }) => {
  return (
    <div>
      <div className="card-container">
        <div className="container">
          <div className="card" key={user.id}>
            <div className="card-img">
              <img
                className="card-image"
                src={user.picture?.medium}
                alt="ProfileImage"
              />
            </div>

            <div className="info">
              <p id="username">
                {user.name?.first}. {user.name?.last}
              </p>
              <p id="email"> {user.email}</p>
              <p id="add"> {user.location?.city}</p>
              <p id="num"> {user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

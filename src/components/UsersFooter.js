export const UsersFooter = ({
  pageNumber, onClickNextPage, onClickPreviousPage, hasNextPage, hasPreviousPage
}) => {
    return (
      <div className="footer">
        {hasPreviousPage ? <button className="prev-btn" onClick={onClickPreviousPage}>Previous</button> : null}
        {hasNextPage ? <button className="nxt-btn" onClick={onClickNextPage}>Next</button> : null}
      </div>
    )
}

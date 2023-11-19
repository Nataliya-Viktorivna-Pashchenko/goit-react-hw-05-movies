export const Reviews = ( reviews ) => {
  const items = reviews.reviews.map(({ id, content, author_details }) => (
    <li key={id}>
      <h3>Author: {author_details.username}</h3>
      <p>{content}</p>
    </li>
  ));
  return <ul >{items}</ul>;
};
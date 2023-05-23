// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import { List, ListItem,ListItemText } from '@mui/material';

const GET_LOCATIONS = gql`
  query GetLocations {
    books {
      name
      gener
    }
  }
`;
function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  // return  (data.forEach((book,id)=>(
  //     <ListItem key={id}>
  //     <ListItemText>{book.name}</ListItemText>
  //   </ListItem>
  //   )))
    console.log(data)
  return data.books.map((book,id) => (
    <ListItem key={id}>
       <ListItemText>{book.name}</ListItemText>
     </ListItem>
  ));
}
export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <List>

      <DisplayLocations />
      </List>
    </div>
  );
}
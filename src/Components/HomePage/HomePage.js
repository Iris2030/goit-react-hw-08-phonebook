import { useSelector } from "react-redux";

const styles = {
header:{
    color: 'white',
    paddingLeft:'500px',
    paddingTop:' 250px',
}
  };

export default function HomePage(){
const name = useSelector(state => state.auth.user.name)


    return(
        <h1 style={styles.header}>Welcome to your Phone book {name}</h1>
    )
}
import {Link} from 'react-router-dom'

const Animal = () => {
    return (
         <div>
            <Link to="/dog"><button type="button">강아지</button></Link>
            <Link to="/cat"><button type="button">고양이</button></Link>
            <Link to="/bird"><button type="button">새</button></Link>
            <Link to="/rabbit"><button type="button">토끼</button></Link>
         </div>
      
    )
}

export default Animal
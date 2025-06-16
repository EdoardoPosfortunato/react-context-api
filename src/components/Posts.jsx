import { useContext } from 'react'
import postContext from '../context/Context';


const Post = () => {
    
    const { cardList } = useContext(postContext)


    return (
        <div className="container ">
            <div className="d-flex flex-wrap my-4 gap-2 justify-content-center">
                {cardList.map((curCharacters, index) => (
                    <div className="card col-3" key={index}>
                        <img src={curCharacters.image} className="card-img-top" alt={curCharacters.name} />
                        <div className="card-body">
                            <h5 className="card-title">{curCharacters.name}</h5>
                            <p className="card-text">{curCharacters.species} - {curCharacters.status}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Post;
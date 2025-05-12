import { useEffect, useState} from "react";
import { getPost } from "../api/PostApi";


export const Posts = () => {
    const [Post, setPost] = useState([]);

    useEffect(() => {
        getPostData();
    }, [])

    const getPostData = async () => {
        const res = await getPost();
        const data = res.data;
        setPost(data);
    }

    return <section className="container">
        <ul>
            {
                Post.map((currEle, index) => {
                    const {id, title, body} = currEle
                    return <li key={id}>
                        <p>{index + 1}</p>
                        <p>Title: {title}</p>
                        <p>Body: {body}</p>
                    </li>
                })
            }
        </ul>
    </section>

}
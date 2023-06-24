import React from 'react';
import { useReducer, useState, useEffect } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BiComment, BiShareAlt, BiBookmarks } from "react-icons/bi";

import "./Post.css";
import { fakeFetch } from './database';

const Post = () => {
    const [postData, setPostData] = useState([]);
    const [newcolor, setNewColor] = useState("black");

    const getData = async () => {
        try {
            const response = await fakeFetch("https://database.com/api/data");
            const data = response?.data[1]?.posts;
            const userData = response?.data[0]?.User;
            setPostData(data);
            console.log(response);
            console.log(userData);
        } catch (error) {
            console.log(error)
        }
    };
    console.log(postData);
    useEffect(() => {
        getData();
    }, [])

    const changeColor = () => {
        setNewColor("lightblue")
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { ...state, counter: state.counter + action.payload };
                break;
            case "decrement":
                return { ...state, counter: state.counter - action.payload };
                break;
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    return (
        <div>
            <div className='conatiner'>
                {
                    postData.map(({ postId, username, picUrl, name, post, tags, postDescription }) =>
                        <div className='main-box' key={postId}>
                            <div className='vote-button'>
                                <button onClick={() => dispatch({ type: "increment", payload: 1 })}><AiFillCaretUp /></button>
                                <h2>{state.counter}</h2>
                                <button onClick={() => dispatch({ type: "decrement", payload: 1 })}><AiFillCaretDown /></button>
                            </div>
                            <div className='post-box'>
                                <div className='userdetails'>

                                </div>
                                <div className='post-heading'>
                                    <h3>{post}</h3>
                                </div>
                                <div className='tags'>
                                    <p>{tags}</p>
                                </div>
                                <div className='post-details'>
                                    <p>{postDescription}</p>
                                </div>
                                <div className='icons'>
                                    <BiComment />
                                    <BiShareAlt />
                                    <p onClick={changeColor} className='bookmark' style={{ color: newcolor }}><BiBookmarks /></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Post;
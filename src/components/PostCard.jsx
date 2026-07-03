import React from "react";
import appWriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-2xl">
                <div className="w-full justify-center mb-4">
                    <img src={appWriteService.getFileView(featuredImage)} alt={title}
                        className="rounded-2xl"
                    />
                </div>
                <h3 className="font-bold">{title}</h3>
            </div>
        </Link>
    )

}

export default PostCard

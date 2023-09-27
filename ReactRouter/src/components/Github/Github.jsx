import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    const [followersData, setFollowersData] = useState([]);
    const [repos, setRepos] = useState([]);
    const [followingData, setFollowingData] = useState([]);




 useEffect(() => {
        const fetchRepoData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${data.login}/repos`);
                if (response.ok) {
                    const repoData = await response.json();
                    setRepos(repoData);
                } else {
                    throw new Error('Failed to fetch repository data');
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (data.login) {
            fetchRepoData();
        }
    }, [data.login]);


    useEffect(() => {
        const fetchFollowersData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${data.login}/followers`);
                if (response.ok) {
                    const followers = await response.json();
                    setFollowersData(followers);
                } else {
                    throw new Error('Failed to fetch followers data');
                }
            } catch (error) {
                console.error(error);
            }
        };

        const fetchFollowingData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${data.login}/following`);
                if (response.ok) {
                    const following = await response.json();
                    setFollowingData(following);
                } else {
                    throw new Error('Failed to fetch following data');
                }
            } catch (error) {
                console.error(error);
            }
        };



        if (data.login) {
            fetchFollowersData();
            fetchFollowingData();
        }
    }, [data.login]);

    return (
        <div className="bg-gray-100 p-6 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                {/* Profile information */}
                <div className="flex items-center space-x-4">
                    <img src={data.avatar_url} alt="Git picture" className="w-24 h-24 rounded-full" />
                    <div>
                        <h1 className="text-3xl font-semibold">{data.login}</h1>
                        <div className="flex space-x-4 text-gray-500">
                            <span>Followers: {data.followers}</span>
                            <span>Following: {data.following}</span>
                        </div>
                    </div>
                </div>


<div className="mt-6 flex space-x-6">
          
                    <div>
                        <h2 className="text-2xl font-semibold">Followers:</h2>
                        <ul className="mt-2 space-y-2">
                            {followersData.map((follower) => (
                                <li key={follower.login} className="flex items-center space-x-2">
                                    <img src={follower.avatar_url} alt={`${follower.login}'s avatar`} className="w-10 h-10 rounded-full" />
                                    <span>{follower.login}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

             
                    <div>
                        <h2 className="text-2xl font-semibold">Following:</h2>
                        <ul className="mt-2 space-y-2">
                            {followingData.map((following) => (
                                <li key={following.login} className="flex items-center space-x-2">
                                    <img src={following.avatar_url} alt={`${following.login}'s avatar`} className="w-10 h-10 rounded-full" />
                                    <span>{following.login}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Repositories:</h2>
                    <ul className="mt-2 list-disc list-inside">
                        {repos.map((repo) => (
                            <li key={repo.id}>{repo.name}</li>
                        ))}
                    </ul>
                </div>
                </div>
                 
            </div>
        </div>
    );
}



export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/dyells07');
    return response.json();
};
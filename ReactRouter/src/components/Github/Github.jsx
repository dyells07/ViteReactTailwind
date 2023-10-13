import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    const [followersData, setFollowersData] = useState([]);
    const [repos, setRepos] = useState([]);
    const [followingData, setFollowingData] = useState([]);
    const [notFollowingBack, setNotFollowingBack] = useState([]);

    useEffect(() => {
      const fetchRepoData = async () => {
          try {
              const response = await fetch(`https://api.github.com/users/${data.login}/repos`);
              if (response.ok) {
                  const repoData = await response.json();

                  // Sort the repositories by the date of the latest commit (most recent first)
                  repoData.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

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


    useEffect(() => {
        const notFollowingBackUsers = followingData.filter(following => !followersData.some(follower => follower.login === following.login));
        setNotFollowingBack(notFollowingBackUsers);
    }, [followersData, followingData]);


    return (
        <div className="bg-gray-100 p-6 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                {/* Profile information */}
                <div className="flex items-center space-x-4">
                    <a href={`https://github.com/${data.login}`} target="_blank" rel="noopener noreferrer">
                        <img src={data.avatar_url} alt="Git picture" className="w-24 h-24 rounded-full" />
                    </a>
                    <div>
                        <h1 className="text-3xl font-semibold">{data.login}</h1>
                        <div className="flex space-x-4 text-gray-500">
                            <span>Followers: <a href={`https://github.com/${data.login}?tab=followers`} target="_blank" rel="noopener noreferrer">{data.followers}</a></span>
                            <span>Following: <a href={`https://github.com/${data.login}?tab=following`} target="_blank" rel="noopener noreferrer">{data.following}</a></span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex space-x-6">
                    <div>
                        <h2 className="text-2xl font-semibold">Followers:</h2>
                        <ul className="mt-2 space-y-2">
                            {followersData.map((follower) => (
                                <li key={follower.login} className="flex items-center space-x-2">
                                    <a href={`https://github.com/${follower.login}`} target="_blank" rel="noopener noreferrer">
                                        <img src={follower.avatar_url} alt={`${follower.login}'s avatar`} className="w-10 h-10 rounded-full" />
                                    </a>
                                    <span><a href={`https://github.com/${follower.login}`} target="_blank" rel="noopener noreferrer">{follower.login}</a></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">Following:</h2>
                        <ol className="mt-2 space-y-2">
                            {followingData.map((following) => (
                                <li key={following.login} className="flex items-center space-x-2">
                                    <a href={`https://github.com/${following.login}`} target="_blank" rel="noopener noreferrer">
                                        <img src={following.avatar_url} alt={`${following.login}'s avatar`} className="w-10 h-10 rounded-full" />
                                    </a>
                                    <span><a href={`https://github.com/${following.login}`} target="_blank" rel="noopener noreferrer">{following.login}</a></span>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="mt-6">
    <h2 className="text-2xl font-semibold">Repositories:</h2>
    <ol type='1' className="mt-2 list-decimal list-inside">
        {repos.map((repo) => (
            <li key={repo.id}><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></li>
        ))}
    </ol>
</div>

<div className="mt-6">
                <h2 className="text-2xl font-semibold">Following Who doesnot Follow Back:</h2>
                <ul className="mt-2 space-y-2">
                    {notFollowingBack.map((user) => (
                        <li key={user.login} className="flex items-center space-x-2">
                            <a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">
                                <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-10 h-10 rounded-full" />
                            </a>
                            <span><a href={`https://github.com/${user.login}`} target="_blank" rel="noopener noreferrer">{user.login}</a></span>
                        </li>
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
    const response = await fetch('https://api.github.com/users/shankarlmc');
    return response.json();
};

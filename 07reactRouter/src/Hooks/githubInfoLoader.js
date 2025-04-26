export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/mayankxDev13");
    return response.json();
  };
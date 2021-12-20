const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '55109db2eebcf252915573d01dcffb97',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
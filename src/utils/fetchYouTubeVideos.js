const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const CHANNEL_ID = 'UC-db2t_fVN3T_kzKYSNUioA';
const YOUTUBE_CHANNEL = `${CORS_PROXY}https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

export default (setYouTubeVideos) => {
  fetch(YOUTUBE_CHANNEL).then(async (res) => {
    const youTubeVideosData = await res.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(youTubeVideosData, 'text/xml');
    const allLinks = Array.from(xmlDoc.querySelectorAll('link'));
    const firstTwoVideos = allLinks.reduce((links, currentLink, index) => {
      if (index === 2 || index === 3) {
        links.push(currentLink.getAttribute('href').replace('watch?v=', 'embed/'))
      }
      return links;
    }, []);
    setYouTubeVideos(firstTwoVideos);
  });
}

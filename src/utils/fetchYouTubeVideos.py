import requests
import xml.etree.ElementTree as ET

CHANNEL_ID = 'UC-db2t_fVN3T_kzKYSNUioA'
YOUTUBE_CHANNEL = 'https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}'.format(CHANNEL_ID=CHANNEL_ID)

response = requests.get(YOUTUBE_CHANNEL)

root = ET.fromstring(response.content)

videos = []
firstTwoVideos = []
for element in root.iter('*'):
    if 'href' in element.attrib:
        videos.append(element.attrib['href'].replace('watch?v=', 'embed/'))

firstTwoVideos.append(videos[2])
firstTwoVideos.append(videos[3])


videosFile = open('./src/utils/constants/videos.js', 'w')
videosFile.write('export default {firstTwoVideos} // hihi'.format(firstTwoVideos=firstTwoVideos))
videosFile.close()

import React, { useState, useEffect } from 'react'
// import { Component } from 'react';
import './App.css'
import SearchBar from './components/SearchBar'
import VideoDetails from './components/VideoDetails'
import VideoList from './components/VideoList'
import useVideos from './hooks/useVideos'
// import youtube from './api/youtube'

const App = () => {

  // We use the custom hook useVideos to make the initial search using the provided search term
  // and to display a list of videos when the app first loads
  // Instead of having : const [videos, setVideos] = useState([]) , we have :
  const [videos, search] = useVideos('most beautiful waterfalls')

  const [selectedVideo, setSelectedVideo] = useState(null)
  
  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  // Before custom hook was introduced: Default search to display when app first loads
  /*
  useEffect(() => {
    const defaultSearchTerm = 'most beautiful waterfalls'
    handleTermSubmit(defaultSearchTerm)
  }, [])
  
  // Call to YT API with search term in params
  
  const handleTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term }
    })
  
    // list of videos retrieved from API to be sent down to VideoList component
    setVideos(response.data.items)

    // by default, we display the first video in the list inside the iframe
    setSelectedVideo(response.data.items[0])
    }

  // Displays selected video in iframe
  // One line function so we use an inline function instead (see below)
  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }
  */

  // Below we used to have: <SearchBar handleFormSubmit={handleTermSubmit} />
  // before using a custom hook
  return (
    <div className='ui container'>
      <SearchBar handleFormSubmit={search} />
      {videos.length} video(s) found.
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetails
              video={selectedVideo}
            />
          </div>
          <div className='five wide column'>
            <VideoList
              videos={videos}
              handleVideoSelect={(video)=> setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

/*
class App extends Component {

  state = { videos: [], selectedVideo: null }

  // Default search to display when app first loads
  componentDidMount() {
    const defaultSearchTerm = 'most beautiful waterfalls'
    this.handleTermSubmit(defaultSearchTerm)
  }

  // Call to YT API with search term in params
  handleTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term }
    })
    this.setState({
      // list of videos retrieved from API to be sent down to VideoList component
      videos: response.data.items,
      // by default, we display the first video in the list inside the iframe
      selectedVideo: response.data.items[0]
    })
  }

  // Displays selected video in iframe
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar handleFormSubmit={this.handleTermSubmit} />
        {this.state.videos.length} video(s) found.
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetails
                video={this.state.selectedVideo}
              />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                handleVideoSelect={this.handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
*/
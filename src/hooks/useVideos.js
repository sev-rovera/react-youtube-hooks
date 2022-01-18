import { useState, useEffect } from "react"
import youtube from '../api/youtube'

// Custom hook that returns a list of videos and a function to search for videos
const useVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([])
  
    // Default search to display when app first loads
    useEffect(() => {
      search(defaultSearchTerm)
    }, [defaultSearchTerm])
  
    // Call to YT API with search term in params
    const search = async (term) => {
      const response = await youtube.get('/search', {
        params: { q: term }
      })
  
      // list of videos retrieved from API to be sent down to VideoList component
      setVideos(response.data.items)
 
    }

    // A custom hook can return an array (useState hook / React convention) or an object (JS convention)
    return [videos, search]
}

export default useVideos

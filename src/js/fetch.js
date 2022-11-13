import axios from 'axios';


export default async function fetchImeges(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '31257105-127381be4f27b54f6c70b810c';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;
  return await axios.get(`${url}${filter}`).then(response => response.data)
  
}
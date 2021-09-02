const KEY = '23205731-7fb91d1243025876effb63184'
export default function fetchImages(searchQuery, pageNumber) {

   return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${KEY}
`).then(r => r.json()).catch( error => console.log(error)) 
    
}
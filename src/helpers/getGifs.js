
export const getGifs = async (category)=>{
    const apiKey = 'KMkomHO7y5lpwx0Zv4Jw3W83wjoM7onE';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`);
   
    const { data } = await respuesta.json();
    const gifs = data.map(img=>{
        return {
            id: img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })

    return (gifs);
  }
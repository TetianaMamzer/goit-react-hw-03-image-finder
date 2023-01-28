import axios from "axios";

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '31894475-96e7d507169227daa5d3a3af7',
    image_type: 'photo',
    orientation: 'horizontal',
  }
})

export const searchImg = async(nameImg, page) => {
  const {data} =  await instance.get( '/', {
    params: {
      q: nameImg,
      page,
      per_page: 12,

    }
  }
  )

  return data;
}
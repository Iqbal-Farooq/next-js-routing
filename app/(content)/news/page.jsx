import { getAllNews } from '@/lib/news'
import NewsList from '@/components/news-list'
const NewsPage = async() => {
  const news=await getAllNews();
  return (
    <>
    <h1>News Page</h1>
    <NewsList news={news} />
    </>
    
  )
}

export default NewsPage
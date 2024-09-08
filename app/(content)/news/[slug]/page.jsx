import React from 'react'
import { getNewsItem } from '@/lib/news'
import { notFound } from 'next/navigation'
const NewsDetailPage = async({params}) => {
  const newsSlug=params.slug
  const news=await getNewsItem(newsSlug)
  if(!news){
    notFound()
  }
  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${news.image}`} alt={news.title} />
        <h1>{news.title}</h1>
        <time dateTime={news.data}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    
    </article>
  )
}

export default NewsDetailPage
import React from 'react'
import Link from 'next/link'
const NewsList = ({news}) => {
  return (
    <ul className='news-list'>
    {news.map((newsItem)=>(
        <li>
        <Link href={`/news/${newsItem.slug}`}>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <span>{newsItem.title}</span>
        </Link>
         </li>
    ) 
    )}
</ul>
  )
}

export default NewsList
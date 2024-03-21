import { RootState } from '@/src/store/store'
import { getDescription, getTitle } from '@/utils/custom'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser';
import i18n from '@/src/locales/i18n'

const News = () => {
  const { news } = useSelector((state: RootState) => state.homeReducer)
  const { id } = useParams()
  if (!news || !(typeof (id) == 'string')) return
  const newsItem = news.data.find(item => item.id == parseInt(id, 10))
  if (!newsItem) return
  return (
    <div className='lc-page-section '>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Главная</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/">Services</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Service</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-2">
            <div className="lc-news-date">{moment(newsItem.created_at).format('DD.MM.YYYY')}</div>
          </div>
          <div className="col-md-8">
            <h1 className='lc-page-title mb-md-4 mb-3'>
              {getTitle(newsItem, i18n.language)}
            </h1>
            <div className='mb-md-4 mb-3'>
              <Image
                width={500}
                height={300}
                src={newsItem.image}
                className="img-fluid w-100"
                alt="news"
              />
            </div>
            <p>
              {parse(getDescription(newsItem))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
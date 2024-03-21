import i18n from '@/src/locales/i18n'
import { RootState } from '@/src/store/store'
import { getDescription, getTitle } from '@/utils/custom'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser';

const Service = () => {
  const { services } = useSelector((state: RootState) => state.homeReducer)
  const { id } = useParams()
  if (!services || !(typeof (id) == 'string')) return
  const service = services.data.find(item => item.id == parseInt(id, 10))
  if (!service) return
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
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className='lc-page-title mb-md-4 mb-3'>
              {getTitle(service, i18n.language)}
            </h1>
            <div className='mb-md-4 mb-3'>
              <Image
                width={500}
                height={300}
                src={service.image}
                className="img-fluid w-100"
                alt="news"
              />
            </div>
            <p>
              {parse(getDescription(service))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
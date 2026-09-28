import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const GiftDetail = () => {
  const { giftId } = useParams()
  const [gift, setGift] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchGiftDetail = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/gifts/${giftId}`)
        if (!response.ok) {
          setError(true)
          return
        }
        const data = await response.json()
        if (data && data.id) {
          setGift(data)
          document.title = `UnEarthed - ${data.name}`
        } else {
          setError(true)
        }
      } catch (err) {
        console.error('Error fetching gift detail:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchGiftDetail()
  }, [giftId])

  if (loading) {
    return <div style={{ textAlign: 'center', margin: '3rem' }}>Loading gift details...</div>
  }

  if (error || !gift) {
    return (
      <div className="main-content" style={{ textAlign: 'center' }}>
        <h2 className="no-gifts">No Details Available 😞</h2>
        <Link to="/" style={{ color: '#0071e3', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; Back to Gifts
        </Link>
      </div>
    )
  }

  const imageUrl = gift.image || gift.imageurl || gift.image_url
  const price = gift.pricepoint || gift.pricePoint
  const submittedBy = gift.submittedby || gift.submittedBy

  return (
    <main className="main-content">
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ color: '#0071e3', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; Back to Gifts
        </Link>
      </div>
      <div className="gift-detail-card">
        <div className="gift-detail-image-container">
          <img id="image" src={imageUrl} alt={gift.name} />
        </div>
        <div className="gift-detail-content">
          <h2 id="name">{gift.name}</h2>
          <p id="submittedBy"><strong>Submitted by:</strong> {submittedBy}</p>
          <p id="pricePoint"><strong>Price:</strong> {price}</p>
          <p id="audience"><strong>Great For:</strong> {gift.audience}</p>
          <p id="description"><strong>Description:</strong> {gift.description}</p>
        </div>
      </div>
    </main>
  )
}

export default GiftDetail

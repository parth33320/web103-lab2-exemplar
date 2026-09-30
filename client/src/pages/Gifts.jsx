import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import SearchAndFilter from '../components/SearchAndFilter'

const Gifts = () => {
  const [gifts, setGifts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAudience, setSelectedAudience] = useState('')
  const [selectedPricePoint, setSelectedPricePoint] = useState('')

  useEffect(() => {
    const fetchGifts = async () => {
      setLoading(true)
      try {
        const queryParams = new URLSearchParams()
        if (searchTerm) queryParams.append('search', searchTerm)
        if (selectedAudience) queryParams.append('audience', selectedAudience)
        if (selectedPricePoint) queryParams.append('pricePoint', selectedPricePoint)

        const response = await fetch(`/gifts?${queryParams.toString()}`)
        if (!response.ok) {
          throw new Error('Failed to fetch gifts')
        }
        const data = await response.json()
        setGifts(data)
      } catch (error) {
        console.error('Error fetching gifts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGifts()
  }, [searchTerm, selectedAudience, selectedPricePoint])

  const audiences = ['Candle Lovers', 'Green Thumbs', 'Gamers', 'Sneakerheads', 'Sungazers', 'Foodies', 'Music Lovers', 'Fashionistas']
  const pricePoints = ['$', '$$', '$$$']

  const handleReset = () => {
    setSearchTerm('')
    setSelectedAudience('')
    setSelectedPricePoint('')
  }

  return (
    <main className="main-content">
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedAudience={selectedAudience}
        onAudienceChange={setSelectedAudience}
        selectedPricePoint={selectedPricePoint}
        onPricePointChange={setSelectedPricePoint}
        audiences={audiences}
        pricePoints={pricePoints}
        onReset={handleReset}
      />

      {loading ? (
        <div style={{ textAlign: 'center', margin: '2rem' }}>Loading gifts...</div>
      ) : gifts && gifts.length > 0 ? (
        <div className="gift-grid">
          {gifts.map((gift) => (
            <Card key={gift.id} gift={gift} />
          ))}
        </div>
      ) : (
        <h2 className="no-gifts">No Gifts Available 😞</h2>
      )}
    </main>
  )
}

export default Gifts

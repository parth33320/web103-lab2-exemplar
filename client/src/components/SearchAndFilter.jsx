import React from 'react'

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  selectedAudience,
  onAudienceChange,
  selectedPricePoint,
  onPricePointChange,
  audiences,
  pricePoints,
  onReset
}) => {
  return (
    <div className="controls-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search gifts by title or description..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="filter-select"
        value={selectedAudience}
        onChange={(e) => onAudienceChange(e.target.value)}
      >
        <option value="">All Audiences</option>
        {audiences.map((aud) => (
          <option key={aud} value={aud}>{aud}</option>
        ))}
      </select>

      <select
        className="filter-select"
        value={selectedPricePoint}
        onChange={(e) => onPricePointChange(e.target.value)}
      >
        <option value="">All Price Points</option>
        {pricePoints.map((price) => (
          <option key={price} value={price}>{price}</option>
        ))}
      </select>

      <button className="reset-button" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  )
}

export default SearchAndFilter

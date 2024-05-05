import React from 'react';

const Sort= ({ sortType, onSortTypeChange, filters, onFilterChange }) => {
  const handleSortTypeChange = (event) => {
    onSortTypeChange(event.target.value);
  };

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    onFilterChange(filter);
  };

  return (
    <div className="sort-bar">
      <label htmlFor="sortType">Sort use:</label>
      <select id="sortType" value={sortType} onChange={handleSortTypeChange}>
        <option value="">choose</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
      <div>
        <label>Filter using:</label>
        <label>
          <input type="checkbox" value="medic" checked={filters.includes('medic')} onChange={handleFilterChange} />
          medic
        </label>
        <label>
          <input type="checkbox" value="support" checked={filters.includes('support')} onChange={handleFilterChange} />
          support
        </label>
        <label>
          <input type="checkbox" value="Assault" checked={filters.includes('Assault')} onChange={handleFilterChange} />
          Assault
        </label>
        <label>
          <input type="checkbox" value="Defender" checked={filters.includes('Defender')} onChange={handleFilterChange} />
          Defender
        </label>
        <label>
          <input type="checkbox" value="Captain" checked={filters.includes('Captain')} onChange={handleFilterChange} />
          Captain
        </label>
        <label>
          <input type="checkbox" value="Witch" checked={filters.includes('Witch')} onChange={handleFilterChange} />
          Witch
        </label>
      </div>
    </div>
  );
};

export default Sort;
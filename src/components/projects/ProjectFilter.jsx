import React from 'react'

const ProjectFilter = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'fullstacked', label: 'Full-Stacked' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'aibots', label: 'AIBots' },
  ]

  return (
    <div className="flex justify-center mb-8 flex-wrap gap-4">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-2.5 text-lg font-semibold rounded-full transition-all duration-200 ${
            activeFilter === filter.id
              ? 'bg-gradient-to-r from-accent to-[#f7c873] text-bg-section shadow-lg'
              : 'bg-bg-section text-text-secondary shadow-md hover:bg-[#2a2f3a] hover:text-text-primary'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default ProjectFilter

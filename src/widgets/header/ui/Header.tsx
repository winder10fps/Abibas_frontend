import { useRef, useState } from 'react';
import './Header.css'
import { IconRouterLink, Logo, RouterLink, SearchInput } from '@/shared/ui'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate()

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim()
    if (!trimmedQuery) return
    
    navigate(`/catalog/search=${encodeURIComponent(trimmedQuery)}`)
    console.log(searchQuery);
  }

  return (
    <header className="header">
      <Logo />
      <nav className="header-nav">
        <RouterLink to='/'>Главная</RouterLink>
        <RouterLink to='/catalog'>Каталог</RouterLink>
        <RouterLink to='/approach'>Наш подход</RouterLink>
      </nav>

      <SearchInput
        ref={searchInputRef}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClear={() => setSearchQuery('')}
        onSubmit={handleSearch}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
        }}
      />

      <nav className='header-nav-icons'>
        <IconRouterLink to='/cart' iconPath='/icons/cart.svg' alt='🛒' />
        <IconRouterLink to='/profile' iconPath='/icons/profile.svg' alt='👤' />
      </nav>
    </header>
  )
}
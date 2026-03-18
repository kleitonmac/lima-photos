import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('todas')

  const categories = [
    'todas',
    'destaque',
    'ensaios',
    'casamentos',
    'turismo',
    'show',
  ]

  const photos = [
    {
      id: 1,
      url: '/assets/photo1.jpeg',
      category: 'ensaios',
      description: 'Retrato artístico com profundidade emocional. Capturado em estúdio com iluminação natural.',
    },
    {
      id: 2,
      url: '/assets/photo2.jpeg',
      category: 'ensaios',
      description: 'Momento mágico do primeiro olhar. Casamento em Florianópolis, SC.',
    },
    {
      id: 3,
      url: '/assets/photo3.jpeg',
      category: 'ensaios',
      description: 'Beleza natural ao amanhecer. Trilha das Cataratas, Foz do Iguaçu.',
    },
    {
      id: 4,
      url: '/assets/photo4.jpeg',
      category: 'ensaios',
      description: 'Arquitetura urbana em detalhes. São Paulo skyline à noite.',
    },
    {
      id: 5,
      url: '/assets/photo5.jpeg',
      category: 'ensaios',
      description: 'Expressão autêntica capturada. Sessão familiar em Serra, ES.',
    },
    {
      id: 6,
      url: '/assets/photo6.jpeg',
      category: 'casamentos',
      description: 'Dança dos noivos sob as estrelas. Festa de casamento no campo.',
    },
    {
      id: 7,
      url: '/assets/photo7.jpeg',
      category: 'turismo',
      description: 'Trilha com vista panorâmica. Chapada Diamantina, BA.',
    },
    {
      id: 8,
      url: '/assets/photo8.jpeg',
      category: 'show',
      description: 'Energia do palco ao vivo. Festival de música em Vitória, ES.',
    },
    {
      id: 9,
      url: '/assets/photo9.jpeg',
      category: 'ensaios',
      description: 'Olhar que conta histórias. Sessão portrait urbana.',
    },
    {
      id: 10,
      url: '/assets/destaque2.jpg',
      category: 'destaque',
      description: 'Fotografia premiada 2025. Exposição nacional de fotografia.',
    },
    {
      id: 11,
      url: '/assets/turismo3.jpg',
      category: 'turismo',
      description: 'Praia paradisíaca ao pôr do sol. Fernando de Noronha, PE.',
    },
    {
      id: 12,
      url: '/assets/show2.jpg',
      category: 'show',
      description: 'Bastidores do grande evento. Show internacional.',
    },
  ]

  const filteredPhotos =
    selectedCategory === 'todas'
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory)

  const currentIndex =
    selectedImage !== null
      ? photos.findIndex((p) => p.id === selectedImage)
      : -1
  const totalPhotos = photos.length

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(photos[currentIndex - 1].id)
    } else {
      setSelectedImage(photos[totalPhotos - 1].id)
    }
  }

  const goToNext = () => {
    if (currentIndex < totalPhotos - 1) {
      setSelectedImage(photos[currentIndex + 1].id)
    } else {
      setSelectedImage(photos[0].id)
    }
  }

  const currentPhoto = selectedImage
    ? photos.find((p) => p.id === selectedImage)
    : null

  // Swipe handlers para mobile
  let startX = 0
  let startY = 0

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!currentPhoto) return
    
    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = startX - currentX
    const diffY = startY - currentY

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7ecd6]">
      {/* Header */}
      <div className="bg-[#f8e8c8] py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 mb-4">
            Nossa <span className="font-bold bg-gradient-to-r from-slate-900 to-black bg-clip-text text-transparent">Galeria</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto px-4">
            Explore nossa coleção de trabalhos fotográficos profissionais
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12 overflow-x-auto pb-2 -mx-2 sm:-mx-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 capitalize shadow-sm whitespace-nowrap flex-shrink-0 mx-2 sm:mx-3 ${
                selectedCategory === category
                  ? 'bg-black text-white shadow-lg hover:shadow-xl transform scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:shadow-md hover:scale-105'
              }`}
            >
              {category === 'todas' ? 'Todas' : category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white hover:-translate-y-2 border border-white/50 hover:border-slate-200 aspect-[4/5] sm:aspect-[3/4]"
              onClick={() => setSelectedImage(photo.id)}
            >
              <img
                src={photo.url}
                alt={photo.description}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <p className="text-white text-xs sm:text-sm font-medium bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 truncate">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="col-span-full text-center py-20">
            <p className="text-2xl text-slate-500">Nenhuma foto nesta categoria</p>
          </div>
        )}
      </div>

      {/* Modal COM SETAS NO PC E MOBILE */}
      {currentPhoto && (
        <>
          <div
            className="fixed inset-0 bg-black/95 z-50"
            onClick={() => setSelectedImage(null)}
          />
          
          <div className="fixed inset-0 z-50 flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 w-full h-full max-w-7xl mx-auto">
            
            {/* Imagem Central - SETAS SEMPRE VISÍVEIS */}
            <div 
              className="w-full lg:w-3/5 h-[70vh] lg:h-[90vh] flex items-center justify-center relative order-2 lg:order-1"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              
              {/* Seta ESQUERDA - VISÍVEL PC + MOBILE */}
              <button
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-2xl z-20 transition-all duration-200"
                onClick={goToPrevious}
              >
                <FiChevronLeft className="w-7 h-7 lg:w-8 lg:h-8" />
              </button>

              <img
                src={currentPhoto.url}
                alt={currentPhoto.description}
                className="w-full h-full max-h-[70vh] lg:max-h-[85vh] object-contain rounded-2xl shadow-2xl mx-auto cursor-grab active:cursor-grabbing"
              />

              {/* Seta DIREITA - VISÍVEL PC + MOBILE */}
              <button
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-2xl z-20 transition-all duration-200"
                onClick={goToNext}
              >
                <FiChevronRight className="w-7 h-7 lg:w-8 lg:h-8" />
              </button>

              {/* Botão Fechar */}
              <button
                className="absolute top-6 right-6 w-14 h-14 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-2xl z-30 transition-all duration-200"
                onClick={() => setSelectedImage(null)}
              >
                <FiX className="w-7 h-7" />
              </button>

              {/* Contador */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full text-white text-lg font-mono shadow-2xl">
                {currentIndex + 1} / {totalPhotos}
              </div>
            </div>

            {/* Painel Direito - POSIÇÃO ORIGINAL */}
            <div className="w-full lg:w-2/5 lg:ml-6 max-w-lg lg:max-w-none flex flex-col h-auto lg:h-[85vh] bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 p-4 sm:p-6 lg:p-8 shadow-2xl order-1 lg:order-2 mt-4 lg:mt-0">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 capitalize">
                    {currentPhoto.category}
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Foto #{currentPhoto.id}
                  </p>
                </div>
                <div className="text-slate-500 text-xl font-mono">
                  {currentIndex + 1} / {totalPhotos}
                </div>
              </div>

              {/* DESCRIÇÃO - POSIÇÃO ORIGINAL */}
              <div className="mb-8 flex-1">
                <span className="block text-slate-700 text-sm font-semibold mb-3 uppercase tracking-wide">
                  Descrição
                </span>
                <div className="bg-slate-50 backdrop-blur-sm rounded-xl p-5 border border-slate-200 min-h-[120px]">
                  <p className="text-slate-800 text-lg leading-relaxed">
                    {currentPhoto.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

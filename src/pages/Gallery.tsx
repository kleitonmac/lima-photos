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
      description:
        'Retrato artístico com profundidade emocional. Capturado em estúdio com iluminação natural.',
    },
    {
      id: 2,
      url: '/assets/photo2.jpeg',
      category: 'ensaios',
      description:
        'Momento mágico do primeiro olhar. Casamento em Florianópolis, SC.',
    },
    {
      id: 3,
      url: '/assets/photo3.jpeg',
      category: 'ensaio',
      description:
        'Beleza natural ao amanhecer. Trilha das Cataratas, Foz do Iguaçu.',
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
      description:
        'Expressão autêntica capturada. Sessão familiar em Serra, ES.',
    },
    {
      id: 6,
      url: '/assets/photo6.jpeg',
      category: 'ensaios',
      description:
        'Dança dos noivos sob as estrelas. Festa de casamento no campo.',
    },
    {
      id: 7,
      url: '/assets/photo7.jpeg',
      category: 'ensaios',
      description: 'Trilha com vista panorâmica. Chapada Diamantina, BA.',
    },
    {
      id: 8,
      url: '/assets/photo8.jpeg',
      category: 'ensaios',
      description:
        'Energia do palco ao vivo. Festival de música em Vitória, ES.',
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
      description:
        'Fotografia premiada 2025. Exposição nacional de fotografia.',
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

  return (
    <div className="min-h-screen bg-[#f7ecd6]">
      <div className="bg-[#f8e8c8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-light text-slate-900 mb-4">
            Nossa <span className="font-semibold">Galeria</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore nossa coleção de trabalhos fotográficos profissionais
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize shadow-sm ${
                selectedCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-50 hover:shadow-md'
              }`}
            >
              {category === 'todas' ? 'Todas' : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-white/50 hover:border-slate-200"
              onClick={() => setSelectedImage(photo.id)}
            >
              <img
                src={photo.url}
                alt={photo.description}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal com DUAS DESCRIÇÕES - CORRIGIDO */}
      {currentPhoto && (
        <>
          <div
            className="fixed inset-0 bg-black/95 z-50"
            onClick={() => setSelectedImage(null)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 max-w-7xl mx-auto w-full">
            {/* Imagem Central (70%) */}
            <div className="w-3/5 max-w-4xl max-h-[90vh] flex items-center justify-center relative">
              <button
                className="absolute left-4 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-black/50 hover:bg-black/70 w-14 h-14 flex items-center justify-center shadow-xl z-10"
                onClick={goToPrevious}
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={currentPhoto.url}
                alt={currentPhoto.description}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />

              <button
                className="absolute right-4 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full  hover:bg-black/70 w-14 h-14 flex items-center justify-center shadow-xl z-10"
                onClick={goToNext}
              >
                <FiChevronRight className="w-6 h-6" />
              </button>

              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full bg-black/60 hover:bg-black/80 w-10 h-10 flex items-center justify-center shadow-lg z-20"
                onClick={() => setSelectedImage(null)}
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Painel Direito (30%) - CORRIGIDO */}
            <div className="w-2/5 ml-6 max-w-lg flex flex-col h-[85vh] bg-[#f8e8c8] backdrop-blur-md rounded-2xl border border-white/10 p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                <div>
                  <h2 className="text-2xl font-bold text-black capitalize">
                    {currentPhoto.category}
                  </h2>
                  <p className="text-black text-sm mt-1">
                    Foto #{currentPhoto.id}
                  </p>
                </div>
                <div className="text-black text-xl font-mono">
                  {currentIndex + 1} / {totalPhotos}
                </div>
              </div>

              {/* DESCRIÇÃO PRINCIPAL - CORRIGIDO */}
              <div className="mb-8 flex-1 bg-[#f8e8c8]">
                <span className="block text-black text-sm font-semibold mb-3 uppercase tracking-wide">
                  Descrição
                </span>
                <div className="bg-[#f8e8c8] backdrop-blur-sm rounded-xl p-5 border border-white/10 min-h-[120px]">
                  <p className="text-black text-lg leading-relaxed">
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

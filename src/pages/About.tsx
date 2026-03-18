import { FiAward, FiCamera, FiUsers, FiHeart } from 'react-icons/fi'

export default function About() {
  const achievements = [
    { icon: FiCamera, number: '10+', label: 'Anos de Experiência' },
    { icon: FiUsers, number: '500+', label: 'Clientes Satisfeitos' },
    { icon: FiAward, number: '50+', label: 'Prêmios Conquistados' },
    { icon: FiHeart, number: '1000+', label: 'Projetos Realizados' },
  ]

  return (
    <div className="min-h-screen bg-[#f7ecd6]">
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-light text-slate-900 mb-4">
            Sobre <span className="font-semibold">Nós</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Conheça a história e a paixão por trás das lentes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fotógrafo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#f7ecd6] rounded-lg -z-10" />
          </div>

          <div>
            <h2 className="text-3xl font-light text-slate-900 mb-6">
              Transformando{' '}
              <span className="font-semibold">Visões em Realidade</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Há mais de uma década, dedico minha vida à arte da fotografia,
                capturando momentos que contam histórias únicas e emocionantes.
                Cada clique é uma oportunidade de eternizar memórias e emoções
                que merecem ser preservadas.
              </p>
              <p>
                Minha jornada começou com uma simples câmera e uma paixão
                inabalável por capturar a beleza do mundo. Desde então,
                transformei essa paixão em uma carreira dedicada a criar imagens
                que tocam corações e atravessam gerações.
              </p>
              <p>
                Especializando-me em retratos, casamentos e fotografia de
                natureza, busco sempre a perfeição técnica aliada à
                sensibilidade artística. Cada projeto é único e recebe toda a
                atenção e cuidado que merece.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {achievements.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#f7ecd6] rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-slate-800" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {item.number}
              </div>
              <div className="text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#f7ecd6] rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-light text-slate-900 mb-6 text-center">
            Minha <span className="font-semibold">Filosofia</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-slate-600 leading-relaxed">
            <p>
              Acredito que a verdadeira arte da fotografia está em capturar não
              apenas imagens, mas emoções, histórias e momentos autênticos. Cada
              sessão fotográfica é uma experiência colaborativa onde trabalho
              lado a lado com meus clientes para criar algo verdadeiramente
              especial.
            </p>
            <p>
              Meu compromisso é com a excelência em cada detalhe - desde o
              planejamento inicial até a entrega final. Utilizo equipamentos de
              última geração e técnicas avançadas de edição para garantir que
              cada imagem seja uma obra de arte.
            </p>
            <p>
              Mais do que simplesmente tirar fotos, meu objetivo é criar
              memórias visuais que você e sua família valorizarão por toda a
              vida. Cada projeto é tratado com dedicação, paixão e o mais alto
              padrão de qualidade profissional.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

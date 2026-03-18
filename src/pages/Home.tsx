import { Link } from 'react-router-dom';
import { FiArrowRight, FiCamera, FiAward, FiHeart } from 'react-icons/fi';

export default function Home() {
  const featuredWorks = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Retratos',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Casamentos',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Natureza',
    },
  ];

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Capturando <span className="font-semibold">Momentos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto font-light">
            Transformando instantes em memórias eternas através da fotografia
          </p>
          <Link
            to="/galeria"
            className="inline-flex items-center space-x-2 bg-white text-slate-900 px-8 py-3 rounded-full hover:bg-slate-100 transition-colors font-medium"
          >
            <span>Ver Portfólio</span>
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Por que escolher <span className="font-semibold">StudioLens</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Compromisso com a excelência e paixão pela fotografia em cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <FiCamera className="w-7 h-7 text-slate-800" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Equipamento Profissional
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Utilizamos câmeras e lentes de última geração para garantir a máxima qualidade em cada foto.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <FiAward className="w-7 h-7 text-slate-800" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Experiência Comprovada
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Mais de 10 anos de experiência capturando momentos especiais para clientes satisfeitos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <FiHeart className="w-7 h-7 text-slate-800" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Paixão e Dedicação
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Cada projeto é tratado com atenção aos detalhes e compromisso em superar expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Trabalhos em <span className="font-semibold">Destaque</span>
            </h2>
            <p className="text-slate-600">Conheça alguns dos nossos melhores trabalhos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredWorks.map((work) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4] cursor-pointer"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/galeria"
              className="inline-flex items-center space-x-2 text-slate-900 hover:text-slate-700 transition-colors font-medium"
            >
              <span>Ver toda a galeria</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

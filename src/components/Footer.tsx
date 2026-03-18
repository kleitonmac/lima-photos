import { FiInstagram, FiFacebook, FiTwitter, FiMail } from 'react-icons/fi'
import { TbBrandWhatsapp } from 'react-icons/tb'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">StudioLens</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Capturando momentos únicos e transformando-os em memórias eternas
              através da arte da fotografia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>cleivesondng@gmail.com</p>
              <p>+55 (82) 996445994</p>
              <p>Maceió, AL - Brasil</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/cleiveson.lima/"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=558296445994&text&type=phone_number&app_absent=0"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <TbBrandWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="mailto:cleivesondng@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 StudioLens. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

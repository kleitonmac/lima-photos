import { useState } from 'react'
import { TbBrandWhatsapp } from 'react-icons/tb'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiMessageCircle, // ← ÍCONE CORRETO
} from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      setSubmitMessage('❌ Preencha todos os campos obrigatórios.')
      setTimeout(() => setSubmitMessage(''), 3000)
      return
    }

    setIsSubmitting(true)

    const whatsappMessage = `📸 *Nova solicitação de fotografia*

👤 *Nome*: ${formData.name}
📧 *Email*: ${formData.email}
📱 *Telefone*: ${formData.phone || 'Não informado'}
🎯 *Serviço*: ${formData.service}

💬 *Mensagem*:
${formData.message}`

    const whatsappUrl = `https://wa.me/558296445994?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setTimeout(() => {
      setSubmitMessage('✅ WhatsApp aberto com mensagem pronta!')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
      setTimeout(() => setSubmitMessage(''), 4000)
    }, 800)
  }

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'cleivesondng@gmail.com' },
    { icon: FiPhone, label: 'Telefone', value: '(82) 99644-5994' },
    { icon: FiMapPin, label: 'Endereço', value: 'Maceió, AL - Brasil' },
  ]

  return (
    <div className="min-h-screen bg-[#f7ecd6]">
      <div className="bg-[#f8e8c8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-light text-slate-900 mb-4">
            Entre em <span className="font-semibold">Contato</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            WhatsApp abre automaticamente 📱
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-light text-slate-900 mb-6">
              Vamos criar algo incrível juntos
            </h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-slate-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {item.label}
                    </div>
                    <div className="text-slate-600 font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <TbBrandWhatsapp className="w-8 h-8 mr-3" />
                WhatsApp Business
              </h3>
              <div className="space-y-2 text-emerald-100">
                <p>🟢 Resposta rápida</p>
                <p>📱 24h disponíveis</p>
                <p>💬 Conversa fluida</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-slate-800 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all bg-white shadow-lg text-lg"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-slate-800 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all bg-white shadow-lg text-lg"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-slate-800 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all bg-white shadow-lg text-lg"
                  placeholder="(82) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-bold text-slate-800 mb-2"
                >
                  Serviço *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all bg-white shadow-lg text-lg"
                >
                  <option value="">Selecione...</option>
                  <option value="retratos">Retratos</option>
                  <option value="casamentos">Casamentos</option>
                  <option value="ensaios">Ensaios</option>
                  <option value="turismo">Turismo/Eventos</option>
                  <option value="comercial">Comercial</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-slate-800 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all bg-white shadow-lg text-lg"
                  placeholder="Detalhes do seu projeto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-5 px-8 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <TbBrandWhatsapp className="w-7 h-7" />
                <span>{isSubmitting ? '🚀 Abrindo...' : '📱 WhatsApp'}</span>
                <FiSend className="w-6 h-6" />
              </button>

              {submitMessage && (
                <div
                  className={`p-4 rounded-2xl text-lg font-bold text-center ${
                    submitMessage.includes('WhatsApp')
                      ? 'bg-emerald-50 border-4 border-emerald-200 text-emerald-800 shadow-xl'
                      : 'bg-red-50 border-4 border-red-200 text-red-800 shadow-xl'
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

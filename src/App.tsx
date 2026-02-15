import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Central Trampos
          </div>
          <a href="https://discord.gg/4wVr25g4F" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Entrar no Discord
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Bem-vindo à <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Central Trampos</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Uma comunidade vibrante onde oportunidades e conexões acontecem. Faça parte de uma rede de profissionais e entusiastas buscando crescimento mútuo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://discord.gg/4wVr25g4F" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
              Junte-se ao Discord
            </a>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-bold text-lg hover:bg-purple-500/10 transition-all">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Por que fazer parte?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Oportunidades</h3>
              <p className="text-gray-400">Acesso a vagas, projetos e parcerias que podem transformar sua carreira.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Comunidade</h3>
              <p className="text-gray-400">Conecte-se com profissionais, compartilhe conhecimento e cresça junto.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Crescimento</h3>
              <p className="text-gray-400">Desenvolva suas habilidades e expanda sua rede profissional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">2K+</div>
              <p className="text-gray-400">Membros Ativos</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">500+</div>
              <p className="text-gray-400">Oportunidades</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">100%</div>
              <p className="text-gray-400">Gratuito</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">24/7</div>
              <p className="text-gray-400">Suporte Ativo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-y border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para começar?</h2>
          <p className="text-xl text-gray-300 mb-8">Clique no botão abaixo e entre para a comunidade Central Trampos no Discord!</p>
          <a href="https://discord.gg/4wVr25g4F" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
            Entrar Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Central Trampos</h3>
              <p className="text-gray-400">Sua comunidade de oportunidades e crescimento profissional.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Sobre</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Comunidade</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://discord.gg/4wVr25g4F" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Discord</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Central Trampos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

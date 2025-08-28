export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-wanted font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ABOUT US
        </h2>
        <p className="text-xl text-gray-300 font-wanted max-w-3xl mx-auto leading-relaxed">
          RipePixel studio는 혁신적인 게임 경험을 만들어내는 데 열정을 가진
          스튜디오입니다.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-wanted font-bold text-white mb-4">
            혁신적인 아이디어
          </h3>
          <p className="text-gray-300 font-wanted leading-relaxed">
            기존 게임의 틀을 벗어난 창의적이고 독창적인 게임 메카닉과 스토리를
            구현합니다.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-wanted font-bold text-white mb-4">
            정성스런 제작
          </h3>
          <p className="text-gray-300 font-wanted leading-relaxed">
            모든 디테일에 신경 쓰며, 플레이어에게 감동을 주는 완성도 높은 게임을
            만듭니다.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-wanted font-bold text-white mb-4">
            커뮤니티 중심
          </h3>
          <p className="text-gray-300 font-wanted leading-relaxed">
            플레이어 커뮤니티와 소통하며, 피드백을 적극 반영하여 함께 게임을
            발전시킵니다.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-300 font-wanted max-w-4xl mx-auto leading-relaxed">
          우리는 단순히 게임을 만드는 것이 아니라, 플레이어들에게 새로운 세계를
          선사하고 잊을 수 없는 경험을 제공하는 것을 목표로 합니다. 작은
          스튜디오이지만 큰 꿈을 가지고, 인디 게임계에 새로운 바람을 일으키고자
          합니다.
        </p>
      </div>
    </section>
  );
}

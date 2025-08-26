export default function Games() {
  const games = [
    {
      title: "Pixel Dreams",
      description: "몽환적인 픽셀 아트 세계에서 펼쳐지는 어드벤처 게임",
      status: "개발 중",
      image: "🎮",
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "Neon Echoes",
      description: "사이버펑크 세계관의 리듬 액션 게임",
      status: "기획 중",
      image: "🎵",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Forest Keeper",
      description: "자연을 지키는 환경 보호 테마의 시뮬레이션 게임",
      status: "출시 예정",
      image: "🌲",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="games"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-game font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Games
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          각각의 게임은 독특한 세계관과 스토리를 가지고 있으며, 플레이어에게
          새로운 경험을 선사합니다.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
            ></div>

            <div className="relative p-8">
              <div className="text-6xl mb-6 text-center">{game.image}</div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {game.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {game.description}
              </p>

              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${game.color} text-white`}
                >
                  {game.status}
                </span>

                <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200">
                  자세히 보기 →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
          모든 게임 보기
        </button>
      </div>
    </section>
  );
}

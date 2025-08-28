export default function Team() {
  const team = [
    {
      name: "정진원",
      role: "프로그래머",
      description: "창의적인 게임의 기획과 개발을 담당합니다.",
      avatar: "👨‍💻",
    },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-wanted font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          TEAM
        </h2>
      </div>

      <div
        className={`grid gap-8 ${
          team.length === 1 ? "justify-center" : "md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {team.map((member, index) => (
          <div
            key={index}
            className={`group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 text-center ${
              team.length === 1 ? "max-w-sm" : ""
            }`}
          >
            <div className="text-6xl mb-4">{member.avatar}</div>

            <h3 className="text-xl font-wanted font-bold text-white mb-2">
              {member.name}
            </h3>

            <p className="text-purple-400 font-wanted font-medium mb-4">
              {member.role}
            </p>

            <p className="text-gray-300 text-sm font-wanted leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-wanted font-bold text-white mb-4">
            함께 일할 팀원을 찾고 있습니다!
          </h3>
          <p className="text-gray-300 font-wanted mb-6 leading-relaxed">
            RipePixel과 함께 게임 업계에 새로운 혁신을 가져올 열정적인 개발자,
            아티스트, 디자이너를 모집합니다.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-wanted font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
            채용 정보 보기
          </button>
        </div>
      </div>
    </section>
  );
}

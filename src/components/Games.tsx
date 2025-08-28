import Link from "next/link";
import Image from "next/image";
import { games } from "@/data/games";

export default function Games() {
  return (
    <section
      id="games"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-wanted font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          GAMES
        </h2>
        <p className="text-xl text-gray-300 font-wanted max-w-3xl mx-auto leading-relaxed">
          각각의 게임은 독특한 세계관과 스토리를 가지고 있으며, 플레이어에게
          새로운 경험을 선사합니다.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 justify-items-center">
        {games.map((game) => (
          <div
            key={game.id}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 max-w-md w-full"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
            ></div>

            <div className="relative p-8">
              {/* 이미지 표시 */}
              <div className="mb-6 text-center relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-2xl font-wanted font-bold text-white mb-4">
                {game.title}
              </h3>

              <p className="text-gray-300 mb-6 font-wanted leading-relaxed">
                {game.description}
              </p>

              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-wanted font-medium bg-gradient-to-r ${game.color} text-white`}
                >
                  {game.status}
                </span>

                <Link
                  href={`/games/${game.slug}`}
                  className="text-purple-400 hover:text-purple-300 font-wanted font-medium transition-colors duration-200"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/games">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-wanted font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            모든 게임 보기
          </button>
        </Link>
      </div>
    </section>
  );
}

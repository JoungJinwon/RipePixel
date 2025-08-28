import Link from "next/link";
import Image from "next/image";
import { games } from "@/data/games";

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-game font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ALL GAMES
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            RipePixel에서 개발 중인 모든 게임들을 만나보세요. 각 게임은 독특한
            컨셉과 재미있는 게임플레이를 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Link key={game.id} href={`/games/${game.slug}`}>
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  {/* 게임 이미지 */}
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {game.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${game.color} text-white`}
                      >
                        {game.status}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {game.description}
                    </p>

                    <div className="text-xs text-gray-400 space-y-1">
                      <div>장르: {game.genre}</div>
                      <div>플랫폼: {game.platforms.join(", ")}</div>
                      {game.releaseDate && (
                        <div>출시일: {game.releaseDate}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/#games">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Games - RipePixel",
  description: "RipePixel에서 개발 중인 모든 게임들을 만나보세요.",
};

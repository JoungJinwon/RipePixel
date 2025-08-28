import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { games } from "@/data/games";

interface GameDetailPageProps {
  params: {
    slug: string;
  };
}

export default function GameDetailPage({ params }: GameDetailPageProps) {
  const game = games.find((g) => g.slug === params.slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 뒤로 가기 버튼 */}
        <div className="mb-8">
          <Link
            href="/games"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← 게임 목록으로 돌아가기
          </Link>
        </div>

        {/* 게임 헤더 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <Image
              src={game.image}
              alt={game.title}
              width={600}
              height={400}
              className="rounded-xl shadow-2xl w-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${game.color} opacity-20 rounded-xl`}
            ></div>
          </div>

          <div className="space-y-6">
            <div>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${game.color} text-white`}
              >
                {game.status}
              </span>
            </div>

            <h1 className="text-5xl font-game font-bold text-white leading-tight">
              {game.title}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              {game.longDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="bg-white/5 rounded-lg p-4">
                <span className="text-purple-400 font-medium block mb-2">
                  장르
                </span>
                <p className="text-gray-300">{game.genre}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <span className="text-purple-400 font-medium block mb-2">
                  플랫폼
                </span>
                <p className="text-gray-300">{game.platforms.join(", ")}</p>
              </div>
              {game.releaseDate && (
                <div className="bg-white/5 rounded-lg p-4">
                  <span className="text-purple-400 font-medium block mb-2">
                    출시일
                  </span>
                  <p className="text-gray-300">{game.releaseDate}</p>
                </div>
              )}
              <div className="bg-white/5 rounded-lg p-4">
                <span className="text-purple-400 font-medium block mb-2">
                  개발 상태
                </span>
                <p className="text-gray-300">{game.status}</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                className={`bg-gradient-to-r ${game.color} hover:opacity-90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                위시리스트 추가
              </button>
            </div>
          </div>
        </div>

        {/* 게임 특징 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">게임 특징</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {game.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${game.color} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className="text-purple-400 font-medium block">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 스크린샷 갤러리 */}
        {game.screenshots.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">스크린샷</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {game.screenshots.map((screenshot, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={screenshot}
                    alt={`${game.title} 스크린샷 ${index + 1}`}
                    width={400}
                    height={250}
                    className="rounded-lg shadow-lg w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 관련 게임 */}
        <div className="border-t border-purple-500/20 pt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            다른 게임들
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {games
              .filter((g) => g.id !== game.id)
              .map((relatedGame) => (
                <Link key={relatedGame.id} href={`/games/${relatedGame.slug}`}>
                  <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex">
                      <div className="w-1/3 relative">
                        <Image
                          src={relatedGame.image}
                          alt={relatedGame.title}
                          width={150}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {relatedGame.title}
                        </h3>
                        <p className="text-gray-300 text-sm line-clamp-2">
                          {relatedGame.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// SEO를 위한 메타데이터 생성
export async function generateMetadata({ params }: GameDetailPageProps) {
  const game = games.find((g) => g.slug === params.slug);

  if (!game) {
    return {
      title: "게임을 찾을 수 없습니다 - RipePixel",
    };
  }

  return {
    title: `${game.title} - RipePixel`,
    description: game.description,
    openGraph: {
      title: `${game.title} - RipePixel`,
      description: game.description,
      images: [game.image],
    },
  };
}

// 정적 경로 생성
export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

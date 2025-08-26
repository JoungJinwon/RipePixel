export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-purple-500/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-game font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              RipePixel studio
            </h3>
            <p className="text-gray-300 leading-relaxed">
              창의성과 혁신으로 게임의 미래를 만들어가는 인디 게임
              스튜디오입니다.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">게임</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Pixel Dreams
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Neon Echoes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Forest Keeper
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">회사</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  소개
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  팀
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  채용
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  보도자료
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">지원</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  연락처
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  개발자 블로그
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  커뮤니티
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 RipePixel. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
            >
              이용약관
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
            >
              쿠키 정책
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

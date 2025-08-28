import { Game } from "@/types/game";

export const games: Game[] = [
  {
    id: "1",
    slug: "void-survivor",
    title: "Void Survivor",
    description: "무한한 우주에서 적들을 피하며 생존하는 탄막 액션 게임",
    longDescription: `
      Void Survivor는 무한한 우주 공간에서 펼쳐지는 스릴 넘치는 탄막 액션 게임입니다.
      플레이어는 우주선을 조종하며 끊임없이 몰려오는 적들을 피하고, 
      다양한 무기와 스킬을 활용하여 최대한 오래 생존해야 합니다.
      
      로그라이크 요소와 함께 매번 새로운 경험을 제공하며, 
      직관적인 조작과 화려한 시각 효과로 몰입감을 극대화했습니다.
    `,
    status: "개발 중",
    image: "/images/games/void-survivor/cover.png",
    screenshots: [
      "/images/games/void-survivor/screenshot1.jpg",
      "/images/games/void-survivor/screenshot2.jpg",
      "/images/games/void-survivor/screenshot3.jpg",
    ],
    color: "from-purple-500 to-blue-500",
    releaseDate: "2025-12-01",
    platforms: ["PC", "Android"],
    genre: "액션, 슈터",
    features: ["우주", "탄막 액션", "뱀서라이크", "스킬 시스템"],
  },
  {
    id: "2",
    slug: "football-hero",
    title: "Football Hero",
    description: "축구 시뮬레이션 게임",
    longDescription: `
      Football Hero는 현실 세계와 유사하게 동작하는 축구 시뮬레이션 게임입니다.
      
      선수를 육성하고, 팀을 관리하여 최고의 축구 팀을 만들어보세요.
      실제 축구 경기의 전략과 전술을 사용하여 승리를 쟁취하세요.
      다양한 리그와 토너먼트에 참가하여 명성을 쌓고, 세계 최고의 축구 팀이 되어보세요.
    `,
    status: "출시 예정",
    image: "/images/games/forest-keeper/cover.jpg",
    screenshots: [
      "/images/games/forest-keeper/screenshot1.jpg",
      "/images/games/forest-keeper/screenshot2.jpg",
    ],
    color: "from-green-500 to-teal-500",
    releaseDate: "2026-03-15",
    platforms: ["PC", "Nintendo Switch"],
    genre: "스포츠, 시뮬레이션",
    features: ["축구", "선수 육성", "경기 운영", "구단 관리"],
  },
];

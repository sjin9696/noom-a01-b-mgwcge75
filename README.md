# Zoom Clone

WebRTC와 WebSocket을 사용한 Zoom 클론 프로젝트입니다.

## 프로젝트 설명

이 프로젝트는 Zoom과 유사한 화상 통화 기능을 구현한 웹 애플리케이션입니다. WebRTC 기술을 활용하여 실시간 비디오/오디오 통화를 지원하며, WebSocket을 통해 시그널링을 처리합니다.

## 기술 스택

- **Backend**
  - Node.js
  - Express.js
  - WebSocket (ws)
  - Pug Template Engine
  - Babel

- **Frontend**
  - JavaScript (ES6+)
  - WebSocket API
  - MVP.css (스타일링)

## 현재 구현된 기능

- 기본 웹 서버 설정
- WebSocket 연결 구현
- 실시간 메시지 송수신
- Pug 템플릿 엔진 통합
- Babel 설정 (ES6+ 지원)
- 개발 환경 설정 (nodemon)

## 프로젝트 구조

```
zoom/
├── public/
│   └── js/
│       └── app.js         # 클라이언트 사이드 JavaScript
├── src/
│   ├── views/
│   │   └── home.pug      # 메인 페이지 템플릿
│   └── server.js         # 서버 설정 및 WebSocket 로직
├── .babelrc              # Babel 설정
├── .gitignore           # Git 무시 파일 목록
├── nodemon.json         # Nodemon 설정
├── package.json         # 프로젝트 설정 및 의존성
└── README.md           # 프로젝트 문서
```

## 시작하기

1. 프로젝트 클론
```bash
git clone [repository-url]
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

서버가 실행되면 http://localhost:3000 에서 웹사이트를 확인할 수 있습니다.

## WebSocket 테스트

1. 브라우저에서 http://localhost:3000 접속
2. 개발자 도구 콘솔을 열어 WebSocket 연결 상태 확인
3. 서버와 클라이언트 간 메시지 송수신 확인
   - 서버 연결 시 "Connected to Server ✅" 메시지 확인
   - 5초 후 자동으로 "Hello from browser!" 메시지 전송
   - 서버로부터 "Message received by server!" 응답 확인

## 개발 환경 설정

- **Babel**: ES6+ 문법 지원
- **Nodemon**: 개발 서버 자동 재시작
- **WebSocket**: 실시간 양방향 통신
- **Pug**: 서버 사이드 템플릿 엔진

## 라이선스

MIT License 
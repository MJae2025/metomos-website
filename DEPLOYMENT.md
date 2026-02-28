# Metomos Website - 배포 가이드

메토모스 웹사이트를 프로덕션 환경에 배포하기 위한 완벽한 가이드입니다.

## 📋 배포 전 체크리스트

- [ ] 모든 이미지가 최적화되었는가?
- [ ] 모든 링크가 정상 작동하는가?
- [ ] 모바일 반응형 테스트 완료?
- [ ] 모든 브라우저에서 테스트 완료?
- [ ] SEO 메타 태그 확인?
- [ ] 성능 테스트 완료?
- [ ] 보안 검사 완료?

## 🚀 배포 옵션

### 1. 공유 호스팅 (가장 간단)

**Bluehost, HostGator, SiteGround 등**

1. FTP 클라이언트 다운로드 (FileZilla 등)
2. 호스팅 제공자의 FTP 정보 획득
3. 모든 파일을 `public_html` 디렉토리에 업로드
4. 도메인 설정 완료

```bash
# 로컬에서 압축
zip -r metomos-website.zip .

# FTP를 통해 업로드 후 서버에서 압축 해제
unzip metomos-website.zip
```

### 2. VPS/클라우드 (권장)

**AWS, DigitalOcean, Linode, Vultr 등**

#### AWS S3 + CloudFront 배포

```bash
# AWS CLI 설치
pip install awscli

# AWS 설정
aws configure

# S3 버킷 생성
aws s3 mb s3://metomos-website

# 파일 업로드
aws s3 sync . s3://metomos-website/ --exclude ".git/*" --exclude "*.md"

# CloudFront 배포 설정 (AWS 콘솔에서)
```

#### DigitalOcean App Platform

1. GitHub에 리포지토리 생성
2. DigitalOcean 계정 연결
3. App Platform에서 새 앱 생성
4. GitHub 리포지토리 선택
5. 자동 배포 설정

### 3. Netlify (가장 쉬움)

```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 로그인
netlify login

# 배포
netlify deploy --prod --dir=.
```

### 4. Vercel

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel --prod
```

### 5. GitHub Pages

1. GitHub에 리포지토리 생성 (`username.github.io`)
2. 모든 파일 푸시
3. 자동 배포 완료

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

## 🔒 HTTPS 설정

**Let's Encrypt (무료)**

```bash
# Certbot 설치
sudo apt-get install certbot python3-certbot-nginx

# 인증서 발급
sudo certbot certonly --standalone -d metomos.com -d www.metomos.com

# 자동 갱신 설정
sudo systemctl enable certbot.timer
```

## ⚙️ 서버 설정

### Nginx 설정

```nginx
server {
    listen 80;
    server_name metomos.com www.metomos.com;
    
    # HTTP를 HTTPS로 리다이렉트
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name metomos.com www.metomos.com;
    
    # SSL 인증서
    ssl_certificate /etc/letsencrypt/live/metomos.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/metomos.com/privkey.pem;
    
    # 보안 헤더
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # 루트 디렉토리
    root /var/www/metomos-website;
    index index.html;
    
    # 캐싱 설정
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA 라우팅
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Gzip 압축
    gzip on;
    gzip_types text/plain text/css text/javascript application/json;
    gzip_min_length 1000;
}
```

### Apache 설정

```apache
<VirtualHost *:80>
    ServerName metomos.com
    ServerAlias www.metomos.com
    
    # HTTP를 HTTPS로 리다이렉트
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</VirtualHost>

<VirtualHost *:443>
    ServerName metomos.com
    ServerAlias www.metomos.com
    
    # SSL 설정
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/metomos.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/metomos.com/privkey.pem
    
    # 루트 디렉토리
    DocumentRoot /var/www/metomos-website
    
    # 보안 헤더
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    
    # 캐싱
    <FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js)$">
        Header set Cache-Control "max-age=2592000, public"
    </FilesMatch>
    
    # Gzip 압축
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
    </IfModule>
    
    # SPA 라우팅
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </IfModule>
</VirtualHost>
```

## 📊 성능 최적화

### 이미지 최적화

```bash
# ImageMagick 사용
convert port_list_01.jpg -quality 85 -resize 800x600 port_list_01-optimized.jpg

# 또는 ImageOptim (macOS)
# 또는 TinyPNG (온라인 도구)
```

### CSS/JS 최소화

```bash
# CSS 최소화
npx csso-cli css/styles.css -o css/styles.min.css

# JavaScript 최소화
npx terser js/main.js -o js/main.min.js
npx terser js/translations.js -o js/translations.min.js
```

### 캐싱 전략

```html
<!-- index.html에서 버전 관리 -->
<link rel="stylesheet" href="css/styles.css?v=1.0.0">
<script src="js/main.js?v=1.0.0"></script>
```

## 🔍 모니터링

### Google Analytics 설정

```html
<!-- index.html의 </head> 전에 추가 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Uptime 모니터링

- **UptimeRobot**: 무료 모니터링 서비스
- **StatusPage.io**: 상태 페이지 관리
- **New Relic**: 성능 모니터링

## 🚨 문제 해결

### 404 오류
- 파일 경로 확인
- 대소문자 확인 (Linux는 대소문자 구분)
- 서버 설정에서 SPA 라우팅 확인

### 느린 로딩
- 이미지 최적화 확인
- CDN 사용 고려
- 캐싱 헤더 확인
- Gzip 압축 활성화

### CORS 오류
- 서버 CORS 헤더 설정
- 외부 API 호출 시 프록시 사용

## 📞 지원

배포 중 문제 발생 시:

1. 호스팅 제공자 지원팀 연락
2. 서버 로그 확인 (`/var/log/nginx/error.log` 등)
3. 브라우저 개발자 도구 확인

---

**배포 완료 후 확인 사항:**
- [ ] 웹사이트 접속 가능?
- [ ] 모든 이미지 로드됨?
- [ ] 언어 토글 작동?
- [ ] 모바일에서 정상 작동?
- [ ] HTTPS 적용됨?
- [ ] SEO 검사 통과?

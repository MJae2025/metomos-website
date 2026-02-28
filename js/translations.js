/**
 * Metomos Website - Translations
 * English and Korean language support
 */

const translations = {
  ko: {
    nav: {
      metomos: 'METOMOS',
      technology: 'TECHNOLOGY',
      business: 'BUSINESS',
      projects: 'PROJECTS',
      customer: 'CUSTOMER CENTER'
    },
    hero: {
      subtitle: 'Realtime Reversible 5D BIM',
      description: 'METOM 5D BIM Platform leads World Smart Construction with WEB3 to Next Generation',
      cta: 'ABOUT METOMOS'
    },
    xdbim: {
      title: 'xD BIM',
      subtitle: 'eXtended Dimension Building Information Modeling',
      subtitle_ko: '확장정보 건설정보모델링'
    },
    web3bim: {
      title: 'WEB3 기반 통합BIM - xD BIM',
      description: 'WEB3 기반 정보성 분산저장 통합구조로 탈중앙 xD BIM은 한층 더 BIM 수준지자 구조입니다. 집, 인 단위로 분산된 정보에 모든 정보성은 정보보유도 URI를 제공 사람마다의 기능을 구축합니다. xD BIM은 스마트 건설 산업 선도하는 인정된 플랫폼 트렌드 모델입니다.'
    },
    tech: {
      title: '5D BIM 구현의 가장 탁월한 서택 METOM xD BIM',
      item1: {
        title: 'METOM Presto',
        desc: '설계도 없이 자동구조해석'
      },
      item2: {
        title: 'METOM Plan',
        desc: '설계도 정보 자동 작성 90% 수준의 CAD설계도'
      },
      item3: {
        title: 'METOM Matrix',
        desc: '건설정보통합 및 원가자동화'
      },
      item4: {
        title: 'METOM BQ',
        desc: '건축, 내부 자동화'
      },
      item5: {
        title: 'METOM SCSI',
        desc: '비용정보통합 자동화'
      },
      item6: {
        title: 'METOM VR',
        desc: '5D BIM 통합'
      }
    },
    worldfirst: {
      title: '세계 최초 클라우드 네트워크 기반 5D BIM 시연회',
      date: '2022년 11월, 26일 9개도시 다 3시간에',
      description: '지상 6층 지하4층 건설정 3인정형 건물 중공 BIM을 실시연습니다.'
    },
    quote: {
      text: 'METOM xD BIM이라는 혁신적인 BIM솔루션이 탄생하기까지 훌륭한 파트너사들과의 맞춤 프로젝트들이 있었습니다.'
    },
    footer: {
      company: 'COMPANY INFO',
      address: '주소: 강남구 (주)메토모스 대표 : 정명철',
      registration: '사업등록번호: 서울시 강남구 역삼동 424, 427호',
      contact: 'CONTACT US',
      social: 'SOCIAL',
      intro: 'Introduction our automated 5D BIM with WEB3 based construction information.'
    }
  },
  en: {
    nav: {
      metomos: 'METOMOS',
      technology: 'TECHNOLOGY',
      business: 'BUSINESS',
      projects: 'PROJECTS',
      customer: 'CUSTOMER CENTER'
    },
    hero: {
      subtitle: 'Realtime Reversible 5D BIM',
      description: 'METOM 5D BIM Platform leads World Smart Construction with WEB3 to Next Generation',
      cta: 'ABOUT METOMOS'
    },
    xdbim: {
      title: 'xD BIM',
      subtitle: 'eXtended Dimension Building Information Modeling',
      subtitle_ko: 'Extended Information Construction Information Modeling'
    },
    web3bim: {
      title: 'WEB3-Based Integrated BIM - xD BIM',
      description: 'With WEB3-based information decentralized storage and integrated structure, decentralized xD BIM has a more advanced BIM level structure. Distributed information in units of houses and people, all information provides URI information retention and builds functions for each person. xD BIM is a recognized platform trend model leading the smart construction industry.'
    },
    tech: {
      title: 'The Most Excellent Choice for 5D BIM Implementation - METOM xD BIM',
      item1: {
        title: 'METOM Presto',
        desc: 'Automatic structural analysis without design drawings'
      },
      item2: {
        title: 'METOM Plan',
        desc: 'Automatic design information creation at 90% level CAD design'
      },
      item3: {
        title: 'METOM Matrix',
        desc: 'Construction information integration and cost automation'
      },
      item4: {
        title: 'METOM BQ',
        desc: 'Architecture and interior automation'
      },
      item5: {
        title: 'METOM SCSI',
        desc: 'Cost information integration automation'
      },
      item6: {
        title: 'METOM VR',
        desc: '5D BIM integration'
      }
    },
    worldfirst: {
      title: 'World First Cloud Network-Based 5D BIM Demonstration',
      date: 'November 2022, 26th - 9 cities in 3 hours',
      description: '6 floors above ground, 4 floors below ground construction 3-person regular building hollow BIM is being practiced.'
    },
    quote: {
      text: 'Behind the birth of the innovative BIM solution METOM xD BIM are excellent customized projects with partner companies.'
    },
    footer: {
      company: 'COMPANY INFO',
      address: 'Address: Gangnam-gu (Co.) Metomos CEO: Jung Myung-chul',
      registration: 'Business Registration Number: Seoul Gangnam-gu Yeoksam-dong 424, 427',
      contact: 'CONTACT US',
      social: 'SOCIAL',
      intro: 'Introduction our automated 5D BIM with WEB3 based construction information.'
    }
  }
};

// Get translation by key
function getTranslation(key, language = 'ko') {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return value || key;
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, getTranslation };
}

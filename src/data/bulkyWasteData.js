import bulkySticker from '../assets/bulky-sticker.svg'
import bulkyOnline from '../assets/bulky-online.svg'

export const bulkyWasteData = [
  {
    title: '대형폐기물 스티커 배출',
    subtitle: 'Sticker Method',
    icon: bulkySticker,
    desc: '침대, 의자, 책상, 장롱처럼 종량제 봉투에 담기 어려운 대형폐기물은 전용 스티커를 구매해 배출할 수 있습니다.',
    steps: [
      '주민센터, 지정 판매처, 편의점 등에서 대형폐기물 스티커를 구매합니다.',
      '품목과 수수료를 확인한 뒤 스티커를 폐기물 눈에 잘 띄는 곳에 부착합니다.',
      '지정된 배출 장소와 날짜에 맞춰 내놓습니다.'
    ],
    note: '품목별 수수료와 판매처는 지역마다 다를 수 있으니 지자체 안내를 꼭 확인하세요.'
  },
  {
    title: '대형폐기물 인터넷 신고',
    subtitle: 'Online Report',
    icon: bulkyOnline,
    desc: '방문 없이 인터넷으로 대형폐기물을 신고하고 수수료를 결제한 뒤 배출할 수도 있습니다.',
    steps: [
      '거주 지역 대형폐기물 배출 신고 사이트에 접속합니다.',
      '배출 품목, 수량, 주소, 배출 희망일을 입력하고 수수료를 결제합니다.',
      '신고필증을 출력하거나 접수번호를 적어 폐기물에 부착한 뒤 배출합니다.'
    ],
    note: '인터넷 신고는 24시간 가능한 경우가 많지만, 수거 가능 요일과 품목은 지역별 기준을 따라야 합니다.'
  }
]

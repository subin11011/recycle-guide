import patagoniaLogo from '../assets/patagonia-logo.png'
import freitagLogo from '../assets/freitag-logo.png'

export const brandData = [
  {
    type: 'Recycle Brand',
    name: 'Patagonia',
    initial: 'P',
    badgeClass: 'patagonia-badge',
    logo: patagoniaLogo,
    logoAlt: 'Patagonia logo',
    desc: 'Patagonia는 오래 입는 아웃도어 의류를 만들며, 재활용 폴리에스터와 재활용 나일론 같은 소재를 적극적으로 사용하는 대표적인 리사이클 패션 브랜드입니다.',
    point: '“새것을 더 많이 사는 것보다, 오래 입고 다시 순환시키는 소비”를 제안하는 브랜드입니다.',
    link: 'https://www.patagonia.com/our-footprint/'
  },
  {
    type: 'Upcycle Brand',
    name: 'FREITAG',
    initial: 'F',
    badgeClass: 'freitag-badge',
    logo: freitagLogo,
    logoAlt: 'FREITAG logo',
    desc: 'FREITAG은 사용이 끝난 트럭 방수천을 수거해 가방과 액세서리로 재탄생시키는 스위스 업사이클 브랜드입니다. 방수천의 색, 무늬, 사용 흔적이 그대로 남아 제품마다 다른 개성을 갖습니다.',
    point: '“버려진 소재가 나만의 디자인이 된다”는 메시지로, 똑같은 제품이 없는 개성 있는 소비를 보여줍니다.',
    link: 'https://freitag.ch/en_US/service/tarp-supply'
  }
]

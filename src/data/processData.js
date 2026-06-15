import home from '../assets/p-home.svg'
import truck from '../assets/p-truck.svg'
import sort from '../assets/p-sort.svg'
import factory from '../assets/p-factory.svg'
import product from '../assets/p-product.svg'

export const processData = [
  {title:'집', desc:'가정에서 종류별로 분리배출합니다.', image:home},
  {title:'수거차', desc:'배출된 재활용품을 수거차가 모아갑니다.', image:truck, moving:true},
  {title:'선별장', desc:'재질과 상태에 따라 다시 분류합니다.', image:sort},
  {title:'재활용 공장', desc:'세척, 분쇄, 압축 과정을 거칩니다.', image:factory},
  {title:'새 제품', desc:'생활용품과 새 자원으로 다시 탄생합니다.', image:product}
]

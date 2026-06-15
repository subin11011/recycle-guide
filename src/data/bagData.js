import food from '../assets/bag-food.svg'
import general from '../assets/bag-general.svg'
import sack from '../assets/bag-sack.svg'
import landfill from '../assets/bag-landfill.svg'
import burn from '../assets/bag-burn.svg'

export const bagData = [
  {title:'음식물 쓰레기 봉투', subtitle:'Food Waste', icon:food, desc:'먹고 남은 음식물처럼 퇴비화나 사료화가 가능한 쓰레기를 담습니다.', items:['밥, 면, 떡','채소류','과일 껍질','생선 살점'], note:'뼈, 조개껍데기, 계란껍데기, 티백, 커피 찌꺼기는 일반쓰레기입니다.'},
  {title:'일반 가정용 종량제', subtitle:'General Waste', icon:general, desc:'재활용이 어렵고 음식물도 아닌 일반 생활쓰레기를 담습니다.', items:['휴지','영수증','칫솔','오염된 비닐','소형 생활쓰레기'], note:'5L, 10L, 20L, 50L, 70L 등 배출량과 지역 기준에 맞게 선택합니다.'},
  {title:'마대자루', subtitle:'Sack Bag', icon:sack, desc:'무겁거나 부피가 큰 불연성 폐기물을 배출할 때 사용합니다.', items:['벽돌','타일','흙','화분 흙','건축 잔재물'], note:'지역에 따라 배출 가능 품목과 판매처가 다르므로 지자체 안내 확인이 필요합니다.'},
  {title:'매립용 종량제', subtitle:'Landfill', icon:landfill, desc:'태우기 어렵고 재활용도 어려운 불연성 생활폐기물을 담습니다.', items:['도자기류','사기그릇','깨진 유리류','불연성 폐기물'], note:'날카로운 물건은 신문지나 박스로 감싸고 표시 후 배출합니다.'},
  {title:'소각용 종량제', subtitle:'Incineration', icon:burn, desc:'재활용이 어렵지만 소각 처리가 가능한 생활폐기물을 담습니다.', items:['오염된 종이','오염된 비닐','고무장갑','낡은 플라스틱 소품'], note:'지역에 따라 일반 종량제와 구분하지 않는 곳도 있습니다.'}
]

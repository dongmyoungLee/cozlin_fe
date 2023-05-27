import bookmark_img from '../asset/images/bookmark.png';
import follow_img from '../asset/images/follow.png';
import myHistory from '../asset/images/myhistory.png';
import myProfile from '../asset/images/myprofile.png';
import myAccount from '../asset/images/myaccount.png';


export const headerMenu = [
    {
      menuName : '인채 채용',
      menuLink : '/humanResources'
    },
    {
      menuName : '채용 공고',
      menuLink : '/announcement'
    },
    {
      menuName : '이미지 리사이즈',
      menuLink : '/resize'
    },
];

export const mypageFavMenu = [
  {
    menuName : '북마크 모아보기',
    imgPath : bookmark_img,
    clickFlag : 'bookmark',
    path : '/applicant/bookmark',
  },
  {
    menuName : '팔로우 모아보기',
    imgPath : follow_img,
    clickFlag : 'follow',
    path : '/applicant/follow',
  },
]


export const mypageTooltipMenu = [

    {
      menuName : '지원 현황',
      imgPath : myHistory,
      clickFlag : 'history',
      path : '/applicant/history',
    },
    {
      menuName : '프로필 관리',
      imgPath : myProfile,
      clickFlag: 'profile',
      path : '/applicant/profile',
    },
    {
      menuName : '계정 정보',
      imgPath : myAccount,
      clickFlag: 'account',
      path : '/applicant/account',
    },
];

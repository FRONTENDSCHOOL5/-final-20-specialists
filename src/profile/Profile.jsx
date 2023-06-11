import React from 'react';
import TopBasicNav from '../components/common/topNav/TopBasicNav';
import {
  ProfileContainer,
  ProfileHeader,
  Followers,
  ProfileImage,
  Followings,
  ProfileMain,
  ProfileFooter,
} from './Profile.style.js';
import basicProfileImage from '../assets/images/basic-profile-img.svg';
import { UnfollowButton } from '../components/common/button/button.style';

export default function profile() {
  return (
    <div>
      <TopBasicNav />
      <ProfileContainer>
        <ProfileHeader>
          <Followers>
            <span>2950</span>
            <span>followers</span>
          </Followers>
          <ProfileImage src={basicProfileImage} alt="프로필 사진" />
          <Followings>
            <span>128</span>
            <span>followings</span>
          </Followings>
        </ProfileHeader>
        <ProfileMain>
          <p>애월읍 위니브 감귤농장</p>
          <p>@ weniv_Mandarin</p>
          <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
        </ProfileMain>
        <ProfileFooter>
          <button className="dm-btn"></button>
          <UnfollowButton />
          <button className="share-btn"></button>
        </ProfileFooter>
      </ProfileContainer>
    </div>
  );
}

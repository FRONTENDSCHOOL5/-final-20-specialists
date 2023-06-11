import styled from 'styled-components';

export const ProfileContainer = styled.div`
  height: 22.625rem;
  width: 100%;
`;

// 프로필 header
export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.563rem;
  margin-top: 1.875rem;
  margin-bottom: 0.875rem;
`;

export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 6.875rem;
  height: 6.875rem;
`;

export const Followings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 프로필 main
export const ProfileMain = styled.div`
  text-align: center;

  & p:first-child {
    font-weight: 700;
    line-height: 1.375rem;
  }

  & p:nth-child(2) {
    font-size: 12px;
    line-height: 14px;
    margin-top: 6px;
    color: var(--sub-text-color);
  }

  & p:nth-child(3) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;
    color: var(--sub-text-color);
  }
`;

// 프로필 footer
export const ProfileFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  margin-top: 24px;

  // DM 메시지 버튼
  .dm-btn {
    border: 1px solid #dbdbdb;
    border-radius: 30px;
    background: url(../assets/icon/icon-message-circle-1.svg) no-repeat;
    background-size: 15px 15px;
    width: 34px;
    height: 34px;
  }

  // 공유하기 버튼
  .share-btn {
    border: 1px solid #dbdbdb;
    border-radius: 30px;
    background: url(../assets/icon/icon-share.svg);
    width: 34px;
    height: 34px;
  }
`;

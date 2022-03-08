import { MultipleProfileBlockList } from './multiple-profile-block-list';
import { SingleProfileBlockList } from './single-profile-block-list';

export const ProfileBlockList = SingleProfileBlockList.concat(
  MultipleProfileBlockList
);

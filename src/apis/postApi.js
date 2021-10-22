import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';
import {removeUndefined} from 'utils/appUtils';

const END_POINT = AppConfigs.END_POINT;

export const getPost = params => {
  return utils.get(`${END_POINT}/posts`, removeUndefined(params));
};

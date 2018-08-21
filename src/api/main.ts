import request from '@/utils/request.ts';

export const getNavMenuList = () => request({
  url: '/navMenu',
})

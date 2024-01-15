import request from '@/utils/request'

// 查询作品中心列表
export function listWorks(query) {
  return request({
    url: '/boya/works/list',
    method: 'get',
    params: query
  })
}

// 查询作品中心详细
export function getWorks(id) {
  return request({
    url: '/boya/works/' + id,
    method: 'get'
  })
}

// 查询作品中心详细
export function getWorksByHomeworkIdAndOwnerId(homeworkId, ownerId) {
  return request({
    url: '/boya/works?homeworkId=' + homeworkId + "&ownerId=" + ownerId,
    method: 'get'
  })
}

// 新增作品中心
export function addWorks(data) {
  return request({
    url: '/boya/works',
    method: 'post',
    data: data
  })
}

// 修改作品中心
export function updateWorks(data) {
  return request({
    url: '/boya/works',
    method: 'put',
    data: data
  })
}

// 删除作品中心
export function delWorks(id) {
  return request({
    url: '/boya/works/' + id,
    method: 'delete'
  })
}

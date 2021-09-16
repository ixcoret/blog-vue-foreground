import request from '@/utils/request'

const baseUrl = '/admin/articles'

export function listArticles(params) {
  return request({
    url: `${baseUrl}/`,
    method: 'get',
    params: params
  })
}

export function getById(id) {
  return request({
    url: `${baseUrl}/${id}`,
    method: 'get'
  })
}

import request from '@/utils/request'

const baseUrl = '/articles'

export function listArticles(params) {
  return request({
    url: `${baseUrl}/`,
    method: 'get',
    params: params
  })
}

export function getArticleById(id) {
  return request({
    url: `${baseUrl}/${id}`,
    method: 'get'
  })
}

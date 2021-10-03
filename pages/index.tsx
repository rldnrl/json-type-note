import React, { useState } from 'react'
import type { NextPage } from 'next'
import { v4 } from 'uuid'
import { css, cx } from '@emotion/css'
import { ApiItem } from 'types/api-item'
import { ApiForm } from 'types/api-form'
import ApiFormComponent from '@components/ApiForm'
import ApiListComponent from '@components/ApiList'
import { getLocalStorageFrom, setLocalStorageFrom } from 'utils/local-storage'
import useApiList from 'hooks/useApiList'
import { isNull } from 'utils/type-guard'

const Home: NextPage = () => {
  const [apiList, setApiList] = useApiList()

  const onApiAdd = (apiForm: ApiForm) => {
    const newApiList: ApiItem[] = [
      ...apiList,
      {
        id: v4(),
        ...apiForm
      }
    ]
    setLocalStorageFrom('api_list', JSON.stringify(newApiList))
    setApiList(newApiList)
  }

  const onRemove = (id: string) => {
    const savedApiListFromLocalStorage = getLocalStorageFrom('api_list')
    if (!isNull(savedApiListFromLocalStorage)) {
      const savedApiList: ApiItem[] = JSON.parse(savedApiListFromLocalStorage)
      const removedApiList = savedApiList.filter((savedApi) => savedApi.id !== id)
      setLocalStorageFrom('api_list', JSON.stringify(removedApiList))
      setApiList(removedApiList)
    }
  }

  const onUpdate = (updateApiForm: ApiItem) => {
    const savedApiListFromLocalStorage = getLocalStorageFrom('api_list')
    if (!isNull(savedApiListFromLocalStorage)) {
      const savedApiList: ApiItem[] = JSON.parse(savedApiListFromLocalStorage)
      const [updatedApiItem] = savedApiList.filter((savedApi) => savedApi.id === updateApiForm.id)
      const restApiItem = savedApiList.filter((savedApi) => savedApi.id !== updateApiForm.id)

      updatedApiItem.json = updateApiForm.json
      updatedApiItem.method = updateApiForm.method
      updatedApiItem.requestOrResponse = updateApiForm.requestOrResponse
      updatedApiItem.tsInterface = updateApiForm.tsInterface
      updatedApiItem.typeName = updateApiForm.typeName

      const updateApiList: ApiItem[] = [
        ...restApiItem,
        {
          ...updatedApiItem
        }
      ]

      setLocalStorageFrom('api_list', JSON.stringify(updateApiList))
      setApiList(updateApiList)
    }
  }

  return (
    <div className={cx(containerStyle)}>
      <main className={mainStyle}>
        <ApiFormComponent onApiAdd={onApiAdd} />
        <ApiListComponent
          apiList={apiList}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      </main>
    </div>
  )
}

const containerStyle = css`
  margin: 0 auto;
  width: 1000px;
`

const mainStyle = css`
  height: 80vh;
  padding-bottom: 4rem;
`

export default Home

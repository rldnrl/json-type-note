import React, { useState } from 'react'
import type { NextPage } from 'next'
import { v4 } from 'uuid'
import { css, cx } from '@emotion/css'
import { ApiItem } from 'types/api-item'
import { ApiForm } from 'types/api-form'
import ApiFormComponent from '@components/ApiForm'
import ApiListComponent from '@components/ApiList'
import { setLocalStorageFrom } from 'utils/local-storage'
import useApiList from 'hooks/useApiList'

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

  return (
    <div className={cx(containerStyle)}>
      <main className={mainStyle}>
        <ApiFormComponent onApiAdd={onApiAdd} />
        <ApiListComponent apiList={apiList} />
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

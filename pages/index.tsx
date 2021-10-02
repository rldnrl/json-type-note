import React, { useState } from 'react'
import ApiFormComponent from '@components/ApiForm'
import type { NextPage } from 'next'
import { ApiItem } from 'types/api-item'
import { v4 } from 'uuid'
import { ApiForm } from 'types/api-form'
import ApiListComponent from '@components/ApiList'
import { css, cx } from '@emotion/css'

const Home: NextPage = () => {
  const [apiList, setApiList] = useState<ApiItem[]>([])

  const onApiAdd = (apiForm: ApiForm) => {
    const newApiList: ApiItem[] = [
      ...apiList,
      {
        id: v4(),
        ...apiForm
      }
    ]
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

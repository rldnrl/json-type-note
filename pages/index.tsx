import React, { useState } from 'react'
import ApiFormComponent from '@components/ApiForm'
import type { NextPage } from 'next'
import { ApiItem } from 'types/api-item'
import { v4 } from 'uuid'
import { ApiForm } from 'types/api-form'
import ApiListComponent from '@components/ApiList'

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
    <>
      <ApiFormComponent onApiAdd={onApiAdd} />
      <ApiListComponent apiList={apiList} />
    </>
  )
}

export default Home

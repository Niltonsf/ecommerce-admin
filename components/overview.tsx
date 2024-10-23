'use client'

import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

interface OverviewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
}

const Overview = ({ data }: OverviewProps) => {
  return (
    <ResponsiveContainer width={'100%'} height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey={'name'}
          stroke="#8888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#8888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={'total'} fill="#3498db" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Overview

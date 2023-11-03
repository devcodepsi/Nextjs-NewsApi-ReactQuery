'use client'

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const Provider = ({ children }) => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {/* 
        React Query를 사용하기 위해 provider 생성 
      */}
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Provider;
import React, {createContext, useState, useEffect} from 'react';

export const VipContext = createContext();

export const VipProvider = ({children}) => {
      
  const [vips, setVips] = useState([])

  useEffect(() => {
      const fetchVip = async () => {
          try {
              const response = await fetch('https://jsonplaceholder.typicode.com/users')
              const data = await response.json()
              setVips(data)
          } catch(error) {
              console.error('VIP 정보를 불러오는데 실패했습니다.', error)
          }
      }        
      fetchVip()
  }, [])

  return (
    <VipContext.Provider value={{ vips, setVips }}>
        {children}
    </VipContext.Provider>
  )
};
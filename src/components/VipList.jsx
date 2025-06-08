import { Link, Outlet } from 'react-router-dom';
import { VipContext } from './VipContext'
import { useContext, useState } from 'react'

function VipList() {
    const {vips} = useContext(VipContext)
    const [search, setSearch] = useState('')

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilterData = () => {
      if(search === '') {
        return vips
      }
      return vips.filter((vip) => vip.username.toLowerCase().includes(search.toLowerCase()))
    }

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-center">VIP 리스트</h1>
      
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
        <input 
          type="text" 
          placeholder="닉네임으로 검색" 
          value={search} 
          onChange={onChangeSearch} 
          className="w-full px-4 py-2 focus:outline-none"
        />
      </div>

      <div className="bg-blue-500 text-white p-8 rounded-lg">
        <ul className="list-none space-y-2 my-4">
          {getFilterData().map((vip) => (
            <li className="p-3  border-gray-300 border-2 rounded-2xl hover:bg-gray-400 transition" key={vip.id}>
              <Link 
                to={`./${vip.id}`}
              >
                  {vip.username}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link to="/new">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 active:bg-gray-950 transition duration-200">
            추가
          </button>
        </Link>
      </div>
      
      <Outlet />
    </div>
  );
}

export default VipList;

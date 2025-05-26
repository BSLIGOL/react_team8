import { useNavigate, useParams, Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { VipContext } from './VipContext';

function VipDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { vips, setVips } = useContext(VipContext);

  const vip = vips.find((vip) => vip.id === parseInt(id));

  useEffect(() => {
    if (!vip) {
      navigate('/');
    }
  }, [vip, navigate]);

  if (!vip) {
    return null;
  }

  const closeModal = () => {
    navigate('/');
  };

  const onDelete = () => {
    const confirmed = window.confirm('정말 삭제하시겠습니까?')
    if(confirmed) {
      setVips(vips.filter((vip) => vip.id !== parseInt(id)))
      navigate('/')
    }
  }

  console.log(vip)

  return (
    <div onClick={closeModal} className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div onClick={(e) => e.stopPropagation()} className="space-y-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="font-bold text-center text-lg">VIP 상세 정보</h3>
        
        <div className="flex flex-col space-y-2 p-4 border border-gray-200 rounded">
          <p>
            <span className="font-bold">닉네임: </span> 
            {vip.username}
          </p>
          <p>
            <span className="font-bold">이름: </span> 
            {vip.name}
          </p>
          <p>
            <span className="font-bold">이메일: </span> 
            {vip.email}
          </p>
          <p>
            <span className="font-bold">전화번호: </span> 
            {vip.phone}
          </p>
          <p>
            <span className="font-bold">회사: </span> 
            {vip.company.name}
          </p>
        </div>
        
        <div className="flex flex-row justify-end space-x-2">
          <button 
            onClick={closeModal}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 active:bg-gray-950 transition duration-200"
          >
            닫기
          </button>
          <button 
            onClick={onDelete}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 active:bg-gray-950 transition duration-200"
          >
            삭제
          </button>
          <Link to={`/edit/${vip.id}`}>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 active:bg-gray-950 transition duration-200">
              수정
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VipDetail;
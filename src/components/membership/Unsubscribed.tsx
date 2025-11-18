import { useEffect, useState } from "react";
import Button from "../common/Button";

import { useNavigate } from "react-router-dom";
import { mockMembershipApi } from "../../api/mockMembershipApi";

export default function Unsubscribed() {
  const navigate = useNavigate();

  const [data,setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    navigate("/payment");
  }

  // api 호출
  useEffect(() => {
    setError(null);
    const fetchData = async () => {
      try{
        const res = await mockMembershipApi.getMembershipImage();

        if(!res.success || !res.data){
          throw new Error(res.error?.message || "이미지를 불러오지 못했습니다");
        }
        setData(res.data.imageUrl);
      } catch(err: any){
        setError(err.message || "이미지 로드 실패");
      }
    };
    fetchData();
  },[]);

  return (
    <div className="relative flex flex-col justify-between w-full">
      {/* 이미지 */}
      <div className="w-full flex-1 overflow-y-auto px-5 pt-12 pb-44">
        {error && (
          <div>{error}</div>
        )}

        {!error && !data && (
          <div>이미지 불러오는 중...</div>
        )}

        {data && (
          <img
            src={data}
            alt="멤버십 이미지"
            className="w-full object-contain" />
        )}
      </div>
      {/* 버튼 */}
      <div className="fixed left-0 bottom-0 w-full">
        <div className="h-10 w-full bg-gradient-to-t from-greyscale-900 to-transparent" />
        <div className="px-5 pb-12 bg-greyscale-900">
          <Button fullWidth onClick={handleClick}>
            시작하기
          </Button>
        </div>
      </div>
    </div>
  )
}
